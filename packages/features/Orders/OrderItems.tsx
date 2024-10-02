import { FC } from "react";
import { Card } from "ui";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { formatCurrency } from "@sahil/lib";

type OrderItemProps = {
  id?: string;
  price: string;
  quantity: string;
  title: string;
};

export const OrderItem: FC<OrderItemProps> = ({ price, quantity, title }) => {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="card-title text-sm">{title}</h2>
          <div className="flex gap-2">
          <p className="flex items-center gap-2 text-gray-600">
            <HiOutlineReceiptPercent /> {quantity} Quantity
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            {formatCurrency(parseInt(price))}
          </p>
        </div>
        </div>

      </div>
    </Card>
  );
};

type Props = {
  items: any[];
};

export const OrderItems: FC<Props> = ({ items }) => {
  const { totalItems, totalCost } = items?.reduce(
    (totals, product) => ({
      totalItems: totals.totalItems + product.quantity,
      totalCost: totals.totalCost + product.price * product.quantity,
    }),
    {
      totalItems: 0,
      totalCost: 0,
    }
  );
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center gap-4">
        <h3>Order Items</h3>
        <p>items</p>
      </div>
      <ul className="space-y-2">
        {items?.map((item, index) => (
          <OrderItem
            key={item.id}
            title={item?.product?.name}
            quantity={item?.product?.quantity}
            price={item?.product?.price}
          />
        ))}
      </ul>
    </div>
  );
};
