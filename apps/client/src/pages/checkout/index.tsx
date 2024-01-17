import { FC } from "react";
import { useFetchProducts } from "@/hooks/products";
import { Card, List, ListHeader } from "ui";
import { formatCost } from "@sahil/lib";
import { useOrderItemsStore } from "@/hooks/useOrderItemsStore";
import Link from "next/link";
import { formatCurrency } from "@sahil/lib";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  HiArrowSmallLeft,
  HiArrowSmallRight,
  HiMinus,
  HiPlus,
  HiOutlineFunnel,
  HiOutlineShoppingCart,
  HiXMark,
  HiOutlineBanknotes,
  HiArrowPath,
  HiSignalSlash,
  HiOutlineReceiptPercent,
} from "react-icons/hi2";
import { usePlaceBusinessOrder } from "@/hooks/orders";
// import { useRequesTtoPay } from "@sahil/lib/hooks/payments";

type OrderItem = {
  price: any;
  quantity: any;
  title: any;
}

export const OrderItem = ({ price, quantity, title }: OrderItem) => {
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

type Props = {
  items: any;
}


export const OrderItems: FC<Props> = ({ items }) => {
  const { totalItems, totalCost } = items?.reduce(
    (totals: any, product: any) => ({
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
          {items?.map((item: any) => (
            <OrderItem
              key={item.id}
              title={item?.name}
              quantity={item?.quantity}
              price={item?.price}
            />
          ))}
        </ul>
      </Card>
    </>
  );
};

function calculateTotal(arr: any) {
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
    placeOrder,
    loading: orderLoading,
    error: orderError,
  } = usePlaceBusinessOrder();
  const { orderItems } = useOrderItemsStore((state) => state);
  const { totalItems, totalPrice } = calculateTotal(orderItems);
  const router = useRouter();


  const onConfirmOrder = async () => {
    try {
      const order = await placeOrder({
        variables: {
          object: {
            origin: "Souq Munuki",
            destination: "Souq Custom",
            customerId: "e87924e8-69e4-4171-bd89-0c8963e03d08",
          },
        },
      });
      router.push("/orders");
    } catch (error) {
      console.log(error);
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
                className="btn btn-sm btn-primary"
                onClick={onConfirmOrder}
              >
                <HiOutlineShoppingCart /> Confirm Order
              </button>
            </div>
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
