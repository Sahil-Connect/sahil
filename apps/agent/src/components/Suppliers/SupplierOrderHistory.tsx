import { parseISO, format } from "date-fns";
import Link from "next/link";

const orders = [
  {
    id: 1,
    createdAt: "2023-08-12T20:54:29.03552+00:00",
    origin: "Souq Munuki",
    destination: "Hai Thoura",
    status: "Cancelled",
    delivery: "Pick-up Point",
    payment: "Cash",
  },
  {
    id: 2,
    createdAt: "2023-08-12T20:54:02.1659+00:00",
    origin: "Souq Munuki",
    destination: "Atlabara",
    status: "Pending",
    delivery: "Pick-up Point",
    payment: "Cash",
  },
  {
    id: 3,
    createdAt: "2023-08-14T16:54:29.03552+00:00",
    origin: "Souq Munuki",
    destination: "Gudelle",
    status: "Fulfilled",
    delivery: "Pick-up Point",
    payment: "Cash",
  },
  {
    id: 4,
    createdAt: "2023-08-13T10:54:29.03552+00:00",
    origin: "Souq Munuki",
    destination: "Custom Market",
    status: "Fulfilled",
    delivery: "Pick-up Point",
    payment: "Cash",
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


const OrderSummary = ({ order }) => {
  const date = parseISO(order.createdAt);
  const formattedDate = format(date, "MMMM d, yyyy HH:mm:ss");
  const statusStyle = orderStyles[order.status] || 'default';
  return (
    <div className="card card-compact shadow">
      <div className="card-body">
        <p>{formattedDate}</p>
        <div className="flex justify-between items-center">
          <Link href={`/orders/${order.id}`}>
          <h3 className="card-title">Order ID: ED-{order.id}</h3>
          </Link>
          <div className={`badge badge-${statusStyle}`}>
            {order.status}
          </div>
        </div>
        <p>
          {order.origin} ---- {order.destination}
        </p>
        <div className="flex gap-2">
          <div className="badge">{order.payment}</div>
          <div className="badge">{order.delivery}</div>
        </div>
      </div>
    </div>
  );
};

export const SupplierOrderHistory = () => {
  return (
    <div className="space-y-2 grow">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">Order History</h3>
        <button className="btn btn-sm">View All</button>
      </div>
      <div className="space-y-2">
        {orders.map((order) => (
          <OrderSummary order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};