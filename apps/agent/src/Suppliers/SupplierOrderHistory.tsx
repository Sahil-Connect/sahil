import Link from 'next/link';
import { useRouter } from "next/router";
import { formatDateTime } from "@sahil/lib/dates";
import { Card, JoinGrid, List, ListHeader } from 'ui';
import { useFetchSupplierOrders } from "@/hooks/suppliers";
import {
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineFlag,
} from 'react-icons/hi2';


enum OrderStatus {
  Cancelled = 'Cancelled',
  Pending = 'Pending',
  Fulfilled = 'Fulfilled',
}

const orderStyles: Record<OrderStatus, string> = {
  [OrderStatus.Cancelled]: 'error',
  [OrderStatus.Pending]: 'info',
  [OrderStatus.Fulfilled]: 'success',
};

export const SupplierOrderHistory = ({ supplierId }) => {
  const { data: orders, error, loading, ordersCount } = useFetchSupplierOrders(supplierId);
  return (
    <div className='bg-base-200 space-y-2 grow p-4 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg'>Order History</h3>
        <button className='btn btn-sm btn-secondary'>View All</button>
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
        renderItem={(order) => <OrderSummary order={order.order} key={order.id} />}
      />
    </div>
  );
};

const OrderSummary = ({ order }) => {

  const statusStyle = orderStyles[order.status] || 'default';
  return (
    <Card className='bg-white h-full'>
      <div>
        <Link href={`/orders/${order.id}`}>
          <h3 className='card-title'>Order ID: ED-{order.id}</h3>
        </Link>
        <div className='flex flex-wrap gap-2'>
          <div className='badge badge-sm'>{order.delivery}</div>
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
