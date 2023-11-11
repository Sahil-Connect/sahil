import { Card } from "ui";
import { formatDateTime } from "@sahil/lib/dates";
import {
  HiOutlineHandRaised,
  HiCalendarDays,
  HiOutlineBanknotes,
  HiOutlineMapPin,
  HiOutlineFlag,
} from "react-icons/hi2";

export const OrderDetails = ({ order }) => {
  return (
    <Card title="Order Details" titleSize="sm">
      <div className="space-y-4">
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center">
            <span className="p-2 shadow rounded-lg w-fit">
              <HiOutlineMapPin />
            </span>
            <p>{order?.origin}</p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="p-2 shadow rounded-lg w-fit">
              <HiOutlineFlag />
            </span>
            <p>{order?.destination}</p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-4 items-center">
            <span className="p-2 border text-secondary rounded-lg w-fit">
              <HiCalendarDays />
            </span>
            <div>
              <p className="text-gray-400">Order Date</p>
              <h3 className="text-md">{formatDateTime(order?.created_at)}</h3>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="p-2 border text-secondary rounded-lg w-fit">
              <HiOutlineHandRaised />
            </span>
            <div>
              <p className="text-gray-400">Status</p>
              <h3 className="text-md">{order?.status}</h3>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <span className="p-2 border text-secondary rounded-lg w-fit">
              <HiOutlineMapPin />
            </span>
            <div>
              <p className="text-gray-400">Delivery Type</p>
              <h3 className="text-md">Pickup Location</h3>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="p-2 border text-secondary rounded-lg w-fit">
              <HiOutlineBanknotes />
            </span>
            <div>
              <p className="text-gray-400">Payment Method</p>
              <h3 className="text-md">Cash on Delivery</h3>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
