import { FC } from "react";
import { Orders } from "@sahil/lib/graphql/__generated__/graphql";
import { formatDateTime } from "@sahil/lib/dates";
import {
  HiOutlineHandRaised,
  HiCalendarDays,
  HiOutlineBanknotes,
  HiOutlineMapPin,
  HiOutlineFlag,
} from "react-icons/hi2";

type Props = {
  order: Orders;
};

export const OrderDetails: FC<Props> = ({ order }) => {

  const orderInfoItems = [
    {
      icon: <HiCalendarDays />,
      label: "Order Date",
      value: formatDateTime(order?.created_at)
    },
    {
      icon: <HiOutlineHandRaised />,
      label: "Status",
      value: order?.status_histories?.[0]?.status ?? "Pending"
    },
    {
      icon: <HiOutlineBanknotes />,
      label: "Payment Method",
      value: "Cash on Delivery"
    }
  ];
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex gap-2 items-center">
          <span className="p-2 shadow rounded w-fit">
            <HiOutlineMapPin />
          </span>
          <p className="text-sm sm:text-base">{order?.origin}</p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="p-2 shadow rounded w-fit">
            <HiOutlineFlag />
          </span>
          <p className="text-sm sm:text-base">{order?.destination}</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      {orderInfoItems.map((item, index) => (
        <OrderInfoItem
          key={index}
          icon={item.icon}
          label={item.label}
          value={item.value}
        />
      ))}
    </div>
    </div>
  );
};

type OrderInfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};


const OrderInfoItem = ({ icon, label, value }: OrderInfoItemProps) => (
  <div className="w-full flex gap-2 items-center">
    <span className="p-2 border text-primary rounded w-fit">
      {icon}
    </span>
    <div>
      <h3 className="text-gray-400 text-sm">{label}</h3>
      <span className="text-sm">{value}</span>
    </div>
  </div>
);