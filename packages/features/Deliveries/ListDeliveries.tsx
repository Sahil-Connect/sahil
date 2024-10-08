import { DeliveryOverviewCard } from "./DeliveryOverviewCard";
import { List, ListHeader, ListErrorState, ListPagination } from "ui";
import { useFetchDeliveries } from "@sahil/lib/hooks/deliveries";

export const ListDeliveries = () => {
  const { data: deliveries, loading, error } = useFetchDeliveries();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(deliveries);
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
