import { FC } from "react";
import { Card } from "ui";
import Link from "next/link";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiEllipsisVertical,
} from "react-icons/hi2";

export const OrderOverviewCard = ({ order }) => {
  return (
    <Card className="w-full">
      <div className="justify-between">
        <div className="flex justify-between">
          <Link
            href={`/orders/${order.id}`}
            className="avatar placeholder h-fit text-3xl"
          >
            <div className="bg-neutral-focus text-base text-neutral-content rounded-full w-12">
              <span>ED</span>
            </div>
          </Link>
          <button type="button" title="order" className="btn btn-ghost btn-sm">
            <HiEllipsisVertical />
          </button>
        </div>
        <div className="space-y-2">
          <Link href={`/orders/${order.id}`} className="card-title">
            Order ID
          </Link>
        </div>
        <div className="mt-2 bg-grey-200 p-4 rounded-xl flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1 font-semibold">
              <span className="opacity-70 text-sm font-normal">
                Service Zone
              </span>
              <p>Hello</p>
            </div>
            <div className="space-y-1 font-semibold">
              <span className="opacity-70  text-sm font-normal">
                Contact Name
              </span>
              <p>Hello</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="shadow bg-white rounded-md p-2">
                <HiOutlineMapPin />
              </span>
              <p>Well</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="shadow bg-white rounded-md p-2">
                <HiOutlinePhone />
              </span>
              <p>Well</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
