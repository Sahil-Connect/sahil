import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import {
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineFlag,
} from 'react-icons/hi2';

const orders = [
  {
    id: 1,
    createdAt: '2023-08-12T20:54:29.03552+00:00',
    origin: 'Souq Munuki',
    destination: 'Hai Thoura',
    status: 'Cancelled',
    delivery: 'Pick-up Point',
    payment: 'Cash',
  },
  {
    id: 2,
    createdAt: '2023-08-12T20:54:02.1659+00:00',
    origin: 'Souq Munuki',
    destination: 'Atlabara',
    status: 'Pending',
    delivery: 'Pick-up Point',
    payment: 'Cash',
  },
  {
    id: 3,
    createdAt: '2023-08-14T16:54:29.03552+00:00',
    origin: 'Souq Munuki',
    destination: 'Gudelle',
    status: 'Fulfilled',
    delivery: 'Pick-up Point',
    payment: 'Cash',
  },
  {
    id: 4,
    createdAt: '2023-08-13T10:54:29.03552+00:00',
    origin: 'Souq Munuki',
    destination: 'Custom Market',
    status: 'Fulfilled',
    delivery: 'Pick-up Point',
    payment: 'Cash',
  },
];

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

export const SupplierOrderHistory = () => {
  return (
    <div className='bg-base-200 space-y-2 grow p-4 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl font-semibold'>Order History</h3>
        <button className='btn btn-sm'>View All</button>
      </div>
      <div className='flex justify-between px-2'>
        <button className='btn btn-sm btn-outline'>Prev</button>
        <button className='btn btn-sm btn-secondary'>Next</button>
      </div>
      <div className='grid place-items-center grid-cols-auto-250 gap-4'>
        {orders.map((order) => (
          <OrderSummary order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};

const OrderSummary = ({ order }) => {
  const date = parseISO(order.createdAt);
  const formattedDate = format(date, 'MMMM d, yyyy HH:mm:ss');
  const statusStyle = orderStyles[order.status] || 'default';
  return (
    <div className='h-full w-full card card-compact shadow bg-base-100'>
      <div className='card-body'>
        <div>
          <Link href={`/orders/${order.id}`}>
            <h3 className='card-title'>Order ID: ED-{order.id}</h3>
          </Link>
          <div className='flex gap-2'>
            <div className='badge badge-sm'>{order.payment}</div>
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
          <p>{formattedDate}</p>
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
      </div>
    </div>
  );
};
