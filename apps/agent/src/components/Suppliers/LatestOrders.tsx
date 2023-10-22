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

const OrderOverviewCard = ({ order }) => {
  return (
    <div className="card card-compact shadow">
      <div className="card-body">
        <h3 className="card-title">Order ID: {order.id}</h3>
        <p>
          {order.origin} ---- {order.destination}
        </p>
      </div>
    </div>
  );
};

export const LatestOrders = () => {
  return (
    <div className="space-y-2 grow">
      <h3 className="text-xl">Latest Orders</h3>
      <div className="space-y-2">
        {orders.map((order) => (
          <OrderOverviewCard order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};
