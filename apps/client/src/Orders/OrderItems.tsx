import { FC } from "react";
import { Business } from "@sahil/lib/graphql/__generated__/graphql";

import { Card } from "ui";
import { HiOutlineBanknotes, HiOutlineReceiptPercent } from "react-icons/hi2";
import { formatCurrency } from "@sahil/lib";


type OrderItem = {
  price: any;
  quantity: any;
  title: any;
}

export const OrderItem: FC<OrderItem> = ({ price, quantity, title }) => {
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
              title={item?.product?.name}
              quantity={item?.product?.quantity}
              price={item?.product?.price}
            />
          ))}
        </ul>
      </Card>
    </>
  );
};
