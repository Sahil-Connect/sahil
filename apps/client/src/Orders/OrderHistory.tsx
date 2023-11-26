import { OrderOverview } from "./OrderOverview";
import { useFetchBusinessOrders } from "@/hooks/businesses";
import { useState } from "react";
import { List, ListHeader, ListErrorState } from "ui";


export const OrderHistory = () => {
    const [offset, setOffset] = useState(0);
  const { data: orders, error, loading, ordersCount } = useFetchBusinessOrders({
    customerId: 'e87924e8-69e4-4171-bd89-0c8963e03d08',
    offset,
  });

  if (error) {
    return (
      <ListErrorState
        heading="Unable to load products..."
        message="Products aren't loading due to a technical problem on our side. Please
      try again."
      />
    );
  }

  console.log(orders);
  return (
    <section className="space-y-4">
      <ListHeader
        onNextPage={() => setOffset((prev) => prev + 4)}
        onPreviousPage={() => setOffset((prev) => prev - 4)}
        isNextDisabled={offset + 4 >= ordersCount}
        isPrevDisabled={offset === 0}
        size={ordersCount?.count}
        limit={3}
        sizeLabel='Orders'
      />
      <List
        data={orders}
        loading={loading}
        renderItem={(order) => (
          <OrderOverview key={order.id} order={order} />
        )}
      />
    </section>
  );
};
