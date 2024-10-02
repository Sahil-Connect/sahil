import { useRouter } from "next/router";
import { useFetchDeliveryRequestByPK } from "@sahil/lib/hooks/deliveries";
import { BusinessOverviewCard } from "@sahil/features/businesses/BusinessOverviewCard";

const orders = [
  {
    id: "1",
    name: "Order 1",
    status: "pending",
    items: [
      {
        id: "1",
        name: "Item 1",
        quantity: 1,
      },
    ],
    client: {
      id: "1",
      name: "Client 1",
    },
  },
];

const RequestOrders = () => {
  return (
    <div>
      <h3>Business Name</h3>
      <div>
        {orders.map((order) => (
          <div key={order.id}>
            <div>
              <p>{order.name}</p>
              <p>{order.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function RequestPage() {
  const router = useRouter();
  const { requestId } = router.query;
  const {
    data: deliveryRequest,
    error,
    loading,
  } = useFetchDeliveryRequestByPK(requestId as string);
  if (error) return <p>error</p>;
  if (loading) return <p>loading</p>;
  if (deliveryRequest?.length === 0) return <p>No delivery request found</p>;

  return (
    <section>
      <h1>Request Page</h1>
      <p>{deliveryRequest?.id}</p>
      <RequestOrders />
    </section>
  );
}
