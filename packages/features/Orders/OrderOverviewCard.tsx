import { FC } from "react";
import { Orders } from "@sahil/lib/graphql/__generated__/graphql";
import { Card, IconButton } from "ui";
import Link from "next/link";
import { formatDateTime } from "@sahil/lib/dates";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiEllipsisVertical,
  HiOutlineClock,
  HiCalendarDays,
} from "react-icons/hi2";

type Props = {
  order: Partial<Orders>;
};

export const OrderOverviewCard: FC<Props> = ({ order }) => {
  return (
    <Card className="w-full">
      <div>
        <div className="flex justify-between items-center">
          <Link
            href={`/orders/${order.id}`}
            className="avatar placeholder h-fit"
          >
            Order ID: #{order.id.slice(0, 8).toLocaleUpperCase()}
          </Link>

          <IconButton
            title="order options"
            icon={HiEllipsisVertical}
            className="btn btn-ghost btn-sm"
          />
        </div>
        <div className="badge badge-primary gap-2">
          <HiOutlineClock /> {order?.status_histories![0]?.status ?? "Pending"}
        </div>
        <div className="mt-2 bg-grey-200 rounded-xl flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 p-2 w-full items-center  border border-solid border-[#d2d6db] rounded">
              <div className="space-y-1 font-semibold">
                <span className="opacity-270 text-sm font-normal">Customer</span>
                <p>{order?.business?.name}</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="shadow bg-base-100 rounded-md p-2">
                <HiCalendarDays />
              </span>
              <p>{formatDateTime(order?.created_at)}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="shadow bg-base-100 rounded-md p-2">
                <HiOutlinePhone />
              </span>
              <p>{order?.business?.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
