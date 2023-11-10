import { formatDateTime } from "@sahil/lib/dates";
import {
  HiOutlineClock,
  HiOutlinePrinter,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineHandRaised,
  HiOutlineBanknotes,
  HiOutlineMapPin,
} from "react-icons/hi2";

export const OrderOverview = ({ order }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className="text-lg">Order ID: 8dc4a18d</h1>
          <div className="badge gap-2 badge-accent">
            <HiOutlineHandRaised /> {order?.status}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button className="btn btn-sm">
            <HiOutlinePrinter /> Print
          </button>
          <button className="btn btn-sm btn-primary">
            <HiOutlineArrowPathRoundedSquare /> Order Again
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="badge gap-2">
          <HiOutlineClock /> {formatDateTime(order?.created_at)}
        </div>
        <div className="badge gap-2">
          <HiOutlineBanknotes /> Cash on Delivery
        </div>
        <div className="badge gap-2">
          <HiOutlineMapPin /> Pickup Location
        </div>
      </div>
    </>
  );
};
