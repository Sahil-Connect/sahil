import { FC } from "react";
import { Orders } from "@sahil/lib/graphql/__generated__/graphql";
import { formatDateTime } from "@sahil/lib/dates";
import {
  HiOutlineHandRaised,
  HiCalendarDays,
  HiOutlineBanknotes,
  HiOutlineMapPin,
  HiOutlineFlag,
  HiOutlineBriefcase,
  HiOutlineUser,
  HiOutlinePhone,
} from "react-icons/hi2";

type Props = {
  order: Orders;
};

export const OrderDetails: FC<Props> = ({ order }) => {
  const orderInfoItems = [
    {
      icon: <HiOutlineHandRaised />,
      label: "Status",
      value: order?.status_histories?.[0]?.status ?? "Pending",
    },
    {
      icon: <HiCalendarDays />,
      label: "Order Date",
      value: formatDateTime(order?.created_at),
    },
    {
      icon: <HiOutlineBanknotes />,
      label: "Payment Method",
      value: "Cash on Delivery",
    },
    {
      icon: <HiOutlineBriefcase />,
      label: "Client",
      value: order?.business?.name as string,
    },
    {
      icon: <HiOutlineUser />,
      label: "Contact Name",
      value: order?.business?.contactName as string,
    },
    {
      icon: <HiOutlinePhone />,
      label: "Contact Number",
      value: order?.business?.phoneNumber as string,
    },
    {
      icon: <HiOutlineMapPin />,
      label: "Origin",
      value: order?.origin as string,
    },
    {
      icon: <HiOutlineFlag />,
      label: "Destination",
      value: order?.destination as string,
    },
  ];

  return (
    <div className="space-y-4">
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

export type OrderInfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

export const OrderInfoItem = ({ icon, label, value }: OrderInfoItemProps) => (
  <div className="w-full flex gap-2 items-center">
    <span className="p-2 border text-primary rounded w-fit">{icon}</span>
    <div>
      <h3 className="text-gray-400 text-sm">{label}</h3>
      <span className="text-sm">{value}</span>
    </div>
  </div>
);
