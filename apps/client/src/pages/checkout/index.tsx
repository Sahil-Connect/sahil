import { Card } from "ui";
import { useOrderItemsStore } from "@/hooks/useOrderItemsStore";
import { formatCurrency } from "@sahil/lib";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  HiOutlineShoppingCart,
  HiOutlineReceiptPercent,
} from "react-icons/hi2";
import {
  useInitBusinessOrder,
  useOrderValidSubscription,
  usePlaceBusinessOrder,
} from "@/hooks/orders";
import { Key, useEffect, useState } from "react";
import { Order_Item } from "@sahil/lib/graphql/__generated__/graphql";

export const OrderItem = ({
  price,
  quantity,
  title,
}: {
  price: number;
  quantity: number;
  title: string;
}) => {
  return (
    <Card className="bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h2 className="card-title text-sm">{title}</h2>
          <p className="flex items-center gap-2 text-gray-600">
            {formatCurrency(price)}
          </p>
        </div>
        <div className="flex gap-2">
          <p className="flex items-center gap-2 text-gray-600">
            <HiOutlineReceiptPercent /> {quantity}x
          </p>
        </div>
      </div>
    </Card>
  );
};

export const OrderItems = ({ items }: { items: any }) => {
  const { totalItems, totalCost } = items?.reduce(
    (
      totals: { totalItems: any; totalCost: number },
      product: { quantity: number; price: number }
    ) => ({
      totalItems: totals.totalItems + product.quantity,
      totalCost: totals.totalCost + product.price * product.quantity,
    }),
    {
      totalItems: 0,
      totalCost: 0,
    }
  );

  return (
    <>
      <Card title="Order Items" titleSize="sm" className="bg-gray-100">
        <ul className="space-y-2">
          {items?.map(
            (item: {
              id: Key | null | undefined;
              name: string;
              quantity: number;
              price: number;
            }) => (
              <OrderItem
                key={item.id}
                title={item?.name}
                quantity={item?.quantity}
                price={item?.price}
              />
            )
          )}
        </ul>
      </Card>
    </>
  );
};

function calculateTotal(arr: Order_Item[]) {
  // Initialize total items and total price
  let totalItems = 0;
  let totalPrice = 0;

  // Iterate through the array
  for (const item of arr) {
    // Add quantity to total items
    totalItems += item.quantity;

    // Calculate subtotal for the current item
    const subtotal = item.price * item.quantity;

    // Add subtotal to total price
    totalPrice += subtotal;
  }

  // Return an object with total items and total price
  return {
    totalItems,
    totalPrice,
  };
}

export default function CheckoutPage() {
  const {
    initOrder,
    loading: initLoading,
    error: initError,
  } = useInitBusinessOrder();
  const { orderItems } = useOrderItemsStore((state) => state);
  const { totalItems, totalPrice } = calculateTotal(orderItems);
  const [actionId, setActionId] = useState<string>();
  const router = useRouter();

  const onConfirmOrder = async () => {
    const orderItemsForInsert = orderItems.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
    }));

    const object = {
      order_items: { data: orderItemsForInsert },
      //ToDo: User Auth user id instead of hard-coded value
      customerId: "e87924e8-69e4-4171-bd89-0c8963e03d08",
    };

    try {
      const result = await initOrder({
        variables: {
          object,
        },
      });
      console.log(result);
      setActionId(result.data.insertBusinessOrder);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="flex">
        <div className="basis-4/6">
          <OrderItems items={orderItems} />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grow space-y-2">
          <Card title="Checkout" titleSize="sm">
            <div className="flex gap-2 items-center">
              <div>
                <p className="text-gray-500">Items</p>
                <p className="text-lg">{totalItems} items</p>
              </div>
              <div>
                <p className="text-gray-500">Total</p>
                <p className="text-lg">{formatCurrency(totalPrice)}</p>
              </div>
            </div>
            <div className="card-actions">
              <button
                className={`btn btn-sm btn-primary ${
                  initLoading && "animate-pulse"
                }`}
                onClick={onConfirmOrder}
              >
                <HiOutlineShoppingCart /> Confirm Order
              </button>
            </div>
            <ProcessOrderRequest actionId={actionId} />
          </Card>
          <Card title="Powered by Momo" titleSize="sm">
            <div className=" flex items-center justify-center">
              <Image
                src={
                  "https://res.cloudinary.com/dwacr3zpp/image/upload/v1701061672/BrandGuid-mtnmomo.svg"
                }
                alt="brand"
                height={"200"}
                width={"200"}
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

const ProcessOrderRequest = ({
  actionId,
}: {
  actionId: string | undefined;
}) => {
  const {
    placeOrder,
    loading: orderLoading,
    error: orderError,
  } = usePlaceBusinessOrder();
  const { data, loading, error } = useOrderValidSubscription(actionId!);
  const [placeOrderResult, setPlaceOrderResult] = useState<any>();

  useEffect(() => {
    const addOrderToDB = async () => {
      if (data && data.insertBusinessOrder && data.insertBusinessOrder.output) {
        try {
          const order = removeTypename(data.insertBusinessOrder.output.order);
          console.log("Order to be placed:", order);
          const result = await placeOrder({
            variables: {
              object: order,
            },
          });
          setPlaceOrderResult(result);
        } catch (err) {
          console.error("Error placing order:", err);
        }
      }
    };

    addOrderToDB();
  }, [data, placeOrder]);

  if (error) return <p>An error occurred while placing order</p>;
  if (loading) return <p>Processing order...</p>;

  if (placeOrderResult) {
    return <p>Order successfully placed</p>;
  }

  return <></>;
};

const removeTypename = (value: any): any => {
  if (value === null || value === undefined || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((v) => removeTypename(v));
  }
  type GenericObject = { [key: string]: any };

  const newValue: GenericObject = {};
  for (const key in value) {
    if (key !== "__typename") {
      newValue[key] = removeTypename(value[key]);
    }
  }
  return newValue;
};
