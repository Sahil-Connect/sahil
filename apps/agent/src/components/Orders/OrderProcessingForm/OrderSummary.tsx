import { useOrderItemsStore } from "@/hooks/useOrderItemsStore";
import {
  HiOutlineCheckCircle,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineCalendarDays,
  HiOutlineDevicePhoneMobile,
  HiOutlinePrinter,
  HiOutlineUserCircle,
  HiXMark,
  HiPlus,
  HiMinus,
} from "react-icons/hi2";

export const formatCost = (cost) => cost.toLocaleString(
  "en-SS",
  {
    style: "currency",
    currency: "SSP"
  }
);

const ProductSummary = ({ product }) => {
  return (
    <>
      <div className="flex justify-between gap-2 items-center">
        <div className="flex gap-2">
          <p className="textbold">{product.name}</p>
          <div className="badge">{formatCost(product.price)}</div>
        </div>
        <div className="flex gap-2 items-center">
          <button className="btn btn-xs btn-square" title="Add">
            <HiMinus />
          </button>
          <div className="badge badge-neutral">{product.quantity}</div>
          <button className="btn btn-xs btn-square" title="Remove">
            <HiPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export const OrderSummary = () => {
  const { orderItems } = useOrderItemsStore((state) => state);
  const { totalItems, totalCost } = orderItems?.reduce(
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
    <form className="space-y-2">
      <div className="flex justify-end">
        <button className="btn btn-sm btn-secondary">
          <HiOutlinePrinter /> Print
        </button>
      </div>
      <div className="card card-compact shadow">
        <div className="card-body">
          <h3 className="card-title text-sm">
            Order: ED-15{" "}
            <span className="text-md text-primary">(5 products)</span>
          </h3>
          <div className="space-y-2">
            {orderItems.map((product) => (
              <ProductSummary key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="card card-compact shadow">
        <div className="card-body">
          <h3 className="card-title text-sm">Summary</h3>
          <ul className="space-y-2">
            <li>
              <p className="flex justify-between">
                Total Items <span>{totalItems} items</span>
              </p>
            </li>
            <li>
              <p className="flex justify-between">
                Total Cost <span>{formatCost(totalCost)}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-sm">
          <HiXMark /> Cancel
        </button>
        <div className="btn btn-sm btn-primary">
          <input type="submit" value="Place Order" />
          <HiOutlineCheckCircle />
        </div>
      </div>
    </form>
  );
};
