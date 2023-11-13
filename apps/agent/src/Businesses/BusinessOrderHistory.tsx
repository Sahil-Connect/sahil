import Link from "next/link";
import {  useFetchBusinessOrders } from "@/hooks/businesses";
import { useRouter } from "next/router";
import { formatDateTime } from "@sahil/lib/dates";
import { Card, JoinGrid, List, ListHeader, ListErrorState } from "ui";
import {
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineFlag,
} from "react-icons/hi2";

enum OrderStatus {
  Cancelled = "Cancelled",
  Pending = "Pending",
  Fulfilled = "Fulfilled",
};

const orderStyles: Record<OrderStatus, string> = {
  [OrderStatus.Cancelled]: "error",
  [OrderStatus.Pending]: "info",
  [OrderStatus.Fulfilled]: "success",
};
  
export const BusinessOrderHistory = () => {
  const router = useRouter();
  const { businessId: customerId } = router.query;
  const { data: orders, error, loading, ordersCount } = useFetchBusinessOrders(customerId as string);
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
        <button className="btn btn-sm">View All</button>
      </div>
      <ListHeader
        onNextPage={() => {}}
        onPreviousPage={() => {}}
        size={ordersCount?.count}
        limit={3}
        sizeLabel='Orders'
      />
      <List
        data={orders}
        error={error}
        loading={loading}
        renderItem={(order) => <OrderSummary order={order} key={order.id} />}
      />
    </div>
  );
};

const OrderSummary = ({ order }) => {
  const statusStyle = orderStyles[order.status] || 'default';
  return (
    <Card className='bg-white h-full w-2/5'>
      <div>
        <Link href={`/orders/${order.id}`}>
          <h3 className='card-title'>Order ID: #{order.id.slice(0, 8).toLocaleUpperCase()}</h3>
        </Link>
        <div className='flex flex-wrap gap-2 gap-y-4'>
          <div className={`badge badge-sm badge-${statusStyle}`}>
            {order.status}
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <span className='shadow rounded-md p-2'>
          <HiOutlineCalendarDays />
        </span>
        <p>{formatDateTime(order?.created_at)}</p>
      </div>
      <div className='flex items-center gap-1'>
        <span className='shadow rounded-md p-2'>
          <HiOutlineMapPin />
        </span>
        <p>{order.origin}</p>
      </div>
      <div className='flex items-center gap-1'>
        <span className='shadow rounded-md p-2'>
          <HiOutlineFlag />
        </span>
        <p>{order.destination}</p>
      </div>
    </Card>
  );
};
  