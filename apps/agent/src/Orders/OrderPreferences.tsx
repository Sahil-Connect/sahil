import { formatDateTime } from "@sahil/lib/dates";
import { Card } from "ui";
import {
  HiOutlinePrinter,
} from "react-icons/hi2";

export const OrderPreferences = ({ order }) => {
  return (
    <section className="bg-slate-100 space-y-2 p-2 rounded-xl shadow">
      <p>Review and Confirm Order</p>
      <div className="flex gap-2 items-center">
        <Card
          title="Order Preferences"
          titleSize="sm"
          height="h-fit"
          className="grow bg-base-100"
        >
          <div className="flex gap-4 items-center">
            <span className="p-2 shadow rounded-lg w-fit">
              <HiOutlinePrinter />
            </span>
            <h3>Review and Confirm Order</h3>
          </div>
        </Card>
        <Card
          title="Order Preferences"
          titleSize="sm"
          height="h-fit"
          className="grow bg-base-100"
        >
          <div className="flex gap-4 items-center">
            <span className="p-2 shadow rounded-lg w-fit">
              <HiOutlinePrinter />
            </span>
            <p>Review and Confirm Order</p>
          </div>
        </Card>
      </div>
    </section>
  );
};
