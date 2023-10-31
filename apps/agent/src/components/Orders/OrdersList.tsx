import { useFetchOrders } from "@/hooks/orders";
import { FC } from "react";
import Link from "next/link";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiEllipsisVertical,
} from "react-icons/hi2";

const OrderSummary = ({ order }) => {
  return (
    <div className="w-full h-full card card-compact bg-base-200/40">
      <div className="card-body justify-between">
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
        <div className="mt-2 bg-base-100 p-4 rounded-xl flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1 font-semibold">
              <span className="opacity-70 text-sm font-normal">
                Service Zone
              </span>
              <p>Hello</p>
            </div>
            <div className="space-y-1 font-semibold">
              <span className="opacity-70 text-sm font-normal">
                Contact Name
              </span>
              <p>Hello</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="shadow rounded-md p-2">
                <HiOutlineMapPin />
              </span>
              <p>Well</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="shadow rounded-md p-2">
                <HiOutlinePhone />
              </span>
              <p>Well</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OrdersList = () => {
  const { data: orders, error, loading } = useFetchOrders();
  if (error) {
    return <p>Failed to load orders</p>;
  }

  if (loading) {
    return <p>Loading Orders</p>;
  }

  return (
    <section className="space-y-2">
      <div className="bg-secondary-content flex p-2 rounded-xl justify-between items-center">
        <div className="text-secondary-focus">Saturday 28 Oct</div>
        <div>
          <button className="btn btn-sm">Filter</button>
        </div>
      </div>
      <div className="grid place-items-center gap-4 grid-cols-auto-250 xl:grid-cols-4">
        {orders?.map((order) => (
          <OrderSummary key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
};
