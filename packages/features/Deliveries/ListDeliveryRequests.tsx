import { DeliveryRequestOverviewCard } from "./DeliveryRequestOverviewCard";
import { List, ListHeader, ListErrorState, ListPagination } from "ui";
import { useFetchDeliveryRequests } from "@sahil/lib/hooks/deliveries";

export const ListDeliveryRequests = () => {
  const { loading, error, data: deliveryRequests } = useFetchDeliveryRequests();
  if (error) return <ListErrorState />;
  return (
    <section>
      <List
        cols={4}
        data={deliveryRequests}
        loading={loading}
        error={error}
        renderItem={(request) => (
          <DeliveryRequestOverviewCard key={request.id} request={request} />
        )}
      />
    </section>
  );
};