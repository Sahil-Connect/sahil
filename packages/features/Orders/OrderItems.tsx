import { FC } from "react";
import { Card } from "ui";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { formatCurrency } from "@sahil/lib";

type OrderItemProps = {
  id?: string;
  price: string;
  quantity: string;
  title: string;
};

export const OrderItem: FC<OrderItemProps> = ({ price, quantity, title }) => {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
      <div>
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-full bg-white shadow-sm border `}>
            <HiOutlineShoppingCart
              className={`w-4 h-4 `}
            />
          </div>
          <div>
          <h3 className="text-sm">{title}</h3>
          <p className="flex items-center gap-2 text-gray-600">
            {formatCurrency(parseInt(price))}
          </p>
          </div>
        </div>
      </div>
    </div>
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
        <div className="divider">Order Items</div>

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
