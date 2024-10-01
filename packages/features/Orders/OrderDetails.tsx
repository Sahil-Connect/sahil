import { FC } from "react";
import { Orders } from "@sahil/lib/graphql/__generated__/graphql";
import { Card } from "ui";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex gap-4 items-center">
          <span className="p-2 border text-primary rounded w-fit">
            <HiCalendarDays />
          </span>
          <div>
            <p className="text-gray-400 text-sm">Order Date</p>
            <h3 className="text-sm sm:text-md">{formatDateTime(order?.created_at)}</h3>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="p-2 border text-primary rounded w-fit">
            <HiOutlineHandRaised />
          </span>
          <div>
            <p className="text-gray-400 text-sm">Status</p>
            <h3 className="text-sm sm:text-md">{order?.status}</h3>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="p-2 border text-primary rounded w-fit">
            <HiOutlineMapPin />
          </span>
          <div>
            <p className="text-gray-400 text-sm">Delivery Type</p>
            <h3 className="text-sm sm:text-md">Pickup Location</h3>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="p-2 border text-primary rounded w-fit">
            <HiOutlineBanknotes />
          </span>
          <div>
            <p className="text-gray-400 text-sm">Payment Method</p>
            <h3 className="text-sm sm:text-md">Cash on Delivery</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
