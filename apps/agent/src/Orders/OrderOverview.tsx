import {
  HiOutlinePrinter,
  HiOutlineArrowPathRoundedSquare,
} from "react-icons/hi2";

export const OrderOverview = ({ order }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1 className="text-lg">Order ID: #{order.id.slice(0, 8).toLocaleUpperCase()}</h1>
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
    </>
  );
};
