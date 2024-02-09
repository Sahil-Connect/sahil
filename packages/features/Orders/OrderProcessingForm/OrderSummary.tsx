import { FC } from "react";
import { Products } from "@sahil/lib/graphql/__generated__/graphql";

import { useOrderItemsStore } from "@sahil/lib/hooks/useOrderItemsStore";
import { useOrderFormStore } from "@sahil/lib/hooks/useOrderFormStore";
import { useForm, SubmitHandler } from "react-hook-form";
import { Card } from "ui";
import { formatCost } from "@sahil/lib";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  HiOutlineCheckCircle,
  HiOutlinePrinter,
  HiXMark,
  HiPlus,
  HiMinus,
} from "react-icons/hi2";
import { usePlaceBusinessOrder } from "@sahil/lib/hooks/orders";

type Props = {
  product: Products;
};

const ProductSummary: FC<Props> = ({ product }) => {
  return (
    <>
      <div className="flex justify-between gap-2 items-center">
        <div className="flex gap-2">
          <p className="text-bold">{product.name}</p>
          <div className="badge">{formatCost(product.price)}</div>
        </div>
        <div className="flex gap-2 items-center">
          <button className="btn btn-xs btn-square" title="Add">
            <HiMinus />
          </button>
          <div className="badge badge-neutral">{product.quantity}</div>
          <button className="btn btn-xs btn-square" title="Remove">
            <HiPlus />
          </button>
        </div>
      </div>
    </>
  );
};

const checkoutSchema = z.object({
  amount: z.string().optional(),
});

type FormData = z.infer<typeof checkoutSchema>;

export const OrderSummary = () => {
  const {
    placeOrder,
    loading: orderLoading,
    error: orderError,
  } = usePlaceBusinessOrder();
  const { client } = useOrderFormStore((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(checkoutSchema),
  });
  const orderItems = useOrderItemsStore((state) => state.orderItems);
  const { totalItems, totalCost } = orderItems?.reduce(
    (totals, product) => ({
      totalItems: totals.totalItems + product.quantity,
      totalCost: totals.totalCost + product.price * product.quantity,
    }),
    {
      totalItems: 0,
      totalCost: 0,
    }
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // const validatedInput = .parse(data);
    // navigateToNextStep("");
    try {
      const order = await placeOrder({
        variables: {
          object: {
            origin: "Souq Munuki",
            destination: "Souq Custom",
            customerId: "",
          },
        },
      });
      console.log("order:", order);
    } catch (err) {
      console.log("no:", err);
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-end">
        <button className="btn btn-sm btn-secondary">
          <HiOutlinePrinter /> Print
        </button>
      </div>
      <Card title="Order: ED-15" titleSize="sm">
        <div className="space-y-2">
          {orderItems.map((product: any) => (
            <ProductSummary key={product.id} product={product} />
          ))}
        </div>
      </Card>
      <Card title="Summary" titleSize="sm">
        <ul className="space-y-2">
          <li>
            <p className="flex justify-between">
              Total Items <span>{totalItems} items</span>
            </p>
          </li>
          <li>
            <p className="flex justify-between">
              Total Cost <span>{formatCost(totalCost)}</span>
            </p>
          </li>
        </ul>
        <div className="divider"></div>
        <div className="card-actions">
          <div className="flex gap-2">
            <button className="btn btn-sm">
              <HiXMark /> Cancel
            </button>
            <div className="btn btn-sm btn-primary">
              <input type="submit" value="Place Order" />
              <HiOutlineCheckCircle />
            </div>
          </div>
        </div>
      </Card>
    </form>
  );
};
