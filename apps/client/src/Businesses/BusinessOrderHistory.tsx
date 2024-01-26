import Link from "next/link";
import { useFetchBusinessOrders } from "@/hooks/businesses";
import { formatDateTime } from "@sahil/lib/dates";
import {
  Card,
  JoinGrid,
  List,
  ListHeader,
  ListErrorState,
  ListPagination,
} from "ui";
import {
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineFlag,
} from "react-icons/hi2";
import { useState } from "react";

enum OrderStatus {
  Cancelled = "Cancelled",
  Pending = "Pending",
  Fulfilled = "Fulfilled",
}

const orderStyles: Record<OrderStatus, string> = {
  [OrderStatus.Cancelled]: "error",
  [OrderStatus.Pending]: "info",
  [OrderStatus.Fulfilled]: "success",
};

export const BusinessOrderHistory = () => {
  const [offset, setOffset] = useState(0);
  const {
    data: orders,
    error,
    loading,
    ordersCount,
  } = useFetchBusinessOrders({
    customerId: "e87924e8-69e4-4171-bd89-0c8963e03d08",
    offset,
  });

  if (error) {
    return (
      <ListErrorState
        heading="Unable to load products..."
        message="Products aren't loading due to a technical problem on our side. Please
      try again."
      />
    );
  }

  return (
    <div className="bg-gray-100 space-y-2 grow p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">Latest Orders</h3>
        <button className="btn btn-sm btn-primary">New Order</button>
      </div>
      <ListHeader size={ordersCount?.count} sizeLabel="Orders">
        <ListPagination
          onNextPage={() => setOffset((prev) => prev + 4)}
          onPreviousPage={() => setOffset((prev) => prev - 4)}
          isNextDisabled={ordersCount ? offset + 4 >= ordersCount.count : false}
          isPrevDisabled={offset === 0}
        />
      </ListHeader>
      <List
        data={orders}
        error={error}
        loading={loading}
        renderItem={(order: any) => (
          <OrderSummary order={order} key={order.id} />
        )}
      />
    </div>
  );
};

const OrderSummary = ({ order }: any) => {
  // @ts-ignore
  const statusStyle = orderStyles[order.status] || "default";
  return (
    <Card className="bg-base-100 h-full">
      <div>
        <Link href={`/orders/${order.id}`}>
          <h3 className="card-title">
            Order ID: #{order.id.slice(0, 8).toLocaleUpperCase()}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-2 gap-y-4">
          <div className={`badge badge-sm badge-${statusStyle}`}>
            {order.status}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="shadow rounded-md p-2">
          <HiOutlineCalendarDays />
        </span>
        <p>{formatDateTime(order?.created_at)}</p>
      </div>
      <div className="flex items-center gap-1">
        <span className="shadow rounded-md p-2">
          <HiOutlineMapPin />
        </span>
        <p>{order.origin}</p>
      </div>
      <div className="flex items-center gap-1">
        <span className="shadow rounded-md p-2">
          <HiOutlineFlag />
        </span>
        <p>{order.destination}</p>
      </div>
    </Card>
  );
};
