import { useFetchOrders } from "@/hooks/orders";
import { List, ListHeader, ListErrorState, ListPagination } from "ui";
import { OrderOverviewCard } from "./OrderOverviewCard";

export const ListOrders = () => {
  const { data: orders, error, loading, ordersCount } = useFetchOrders();
  if (error) {
    return (
      <ListErrorState
        heading="Unable to load products..."
        message="Products aren't loading due to a technical problem on our side. Please
      try again."
      />
    );
  }

  return (
    <section className="space-y-4">
      <ListHeader size={ordersCount?.count} sizeLabel="Orders" title="Orders">
        <></>
      </ListHeader>
      <List
        data={orders}
        loading={loading}
        cols={4}
        renderItem={(order) => (
          <OrderOverviewCard key={order.id} order={order} />
        )}
      />
    </section>
  );
};
