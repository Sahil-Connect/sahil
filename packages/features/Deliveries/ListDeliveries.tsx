import { DeliveryOverviewCard } from "./DeliveryOverviewCard";
import { List, ListHeader, ListErrorState, ListPagination } from "ui";
import { useFetchDeliveries } from "@sahil/lib/hooks/deliveries";

const deliveries = [
  {
    id: 1,
    name: "Delivery 1",
    status: "Delivered",
    date: "Oct 1st, 2022",
    time: "12:00 PM",
    location: "New York, NY",
    deliveryType: "Home Delivery",
    totalAmount: "$100.00",
    orderId: 1,
  },
  {
    id: 2,
    name: "Delivery 2",
    status: "Delivered",
    date: "Oct 1st, 2022",
    time: "12:00 PM",
    location: "New York, NY",
    deliveryType: "Home Delivery",
    totalAmount: "$100.00",
    orderId: 2,
  },
  {
    id: 3,
    name: "Delivery 3",
    status: "Delivered",
    date: "Oct 1st, 2022",
    time: "12:00 PM",
    location: "New York, NY",
    deliveryType: "Home Delivery",
    totalAmount: "$100.00",
    orderId: 3,
  },
];

export const ListDeliveries = () => {
  const { data, loading, error } = useFetchDeliveries();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <section>
      <List
        cols={4}
        data={deliveries}
        loading={false}
        renderItem={(delivery) => (
          <DeliveryOverviewCard key={delivery.id} delivery={delivery} />
        )}
      />
    </section>
  );
};
