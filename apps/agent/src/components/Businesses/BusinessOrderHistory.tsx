import Link from "next/link";
const orders = [
    {
      id: 1,
      createdAt: "",
      origin: "Souq Munuki",
      destination: "Hai Thoura",
    },
    {
      id: 2,
      createdAt: "",
      origin: "Souq Munuki",
      destination: "Atlabara",
    },
    {
      id: 3,
      createdAt: "",
      origin: "Souq Munuki",
      destination: "Gudelle",
    },
    {
      id: 4,
      createdAt: "",
      origin: "Souq Munuki",
      destination: "Custom Market",
    },
  ];
  
  const OrderSummary = ({ order }) => {
    return (
      <div className="card card-compact shadow">
        <div className="card-body">
          <Link href={`/orders/${order.id}`}>
            <h3 className="card-title">Order ID: {order.id}</h3>
          </Link>
          <p>
            {order.origin} ---- {order.destination}
          </p>
        </div>
      </div>
    );
  };
  
  export const BusinessOrderHistory = () => {
    return (
      <div className="space-y-2 grow">
        <div className="flex justify-between items-center">
          <h3 className="text-xl">Latest Orders</h3>
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
  