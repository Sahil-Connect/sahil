import { DeliveryRequestOverviewCard } from "./DeliveryRequestOverviewCard";
import { List, ListHeader, ListErrorState, ListPagination } from "ui";
import { useFetchDeliveryRequests } from "@sahil/lib/hooks/deliveries";

const deliveryRequests = [
  {
    id: 1,
    name: "Delivery Request 1",
    status: "Pending",
    date: "Oct 1st, 2022",
    time: "12:00 PM",
    location: "New York, NY",
    deliveryType: "Home Delivery",
    totalAmount: "$100.00",
  },
  {
    id: 2,
    name: "Delivery Request 2",
    status: "Pending",
    date: "Oct 1st, 2022",
    time: "12:00 PM",
    location: "New York, NY",
    deliveryType: "Home Delivery",
    totalAmount: "$100.00",
  },
  {
    id: 3,
    name: "Delivery Request 3",
    status: "Pending",
    date: "Oct 1st, 2022",
    time: "12:00 PM",
    location: "New York, NY",
    deliveryType: "Home Delivery",
    totalAmount: "$100.00",
  },
];

export const ListDeliveryRequests = () => {
  const { loading, error, data } = useFetchDeliveryRequests();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    console.log(error);
    console.log(data);

  return (
    <section>
      <List
        cols={4}
        data={data}
        loading={false}
        renderItem={(request) => (
          <DeliveryRequestOverviewCard key={request.id} request={request} />
        )}
      />
    </section>
  );
};
