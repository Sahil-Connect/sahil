import { Card } from "ui";
import {
  HiOutlineBanknotes,
  HiOutlineReceiptPercent,
} from "react-icons/hi2";

export const OrderItem = ({ price, quantity, title }) => {
    return (
      <Card className="bg-slate-100">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="card-title text-sm">{title}</h2>
          </div>
          <div className="flex gap-2">
            <div className="badge gap-2">
              <HiOutlineReceiptPercent /> {quantity}x
            </div>
            <div className="badge gap-2">
              <HiOutlineBanknotes /> {price}
            </div>
          </div>
        </div>
      </Card>
    );
  };

  export const OrderItems = ({ items }) => {
    return (
      <Card title="Items" titleSize="sm" height="h-fit">
        <ul className="space-y-2">
          {items?.map((item) => (
            <OrderItem
              key={item.id}
              title={item?.product?.name}
              quantity={5}
              price={5000}
            />
          ))}
        </ul>
      </Card>
    );
  };