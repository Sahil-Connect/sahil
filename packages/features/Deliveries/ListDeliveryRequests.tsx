import { DeliveryRequestOverviewCard } from "./DeliveryRequestOverviewCard";

export const ListDeliveryRequests = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DeliveryRequestOverviewCard />
        <DeliveryRequestOverviewCard />
        <DeliveryRequestOverviewCard />
        <DeliveryRequestOverviewCard />
        <DeliveryRequestOverviewCard />
        <DeliveryRequestOverviewCard />

          <DeliveryRequestOverviewCard />
          <DeliveryRequestOverviewCard />
          <DeliveryRequestOverviewCard />
          <DeliveryRequestOverviewCard />
          <DeliveryRequestOverviewCard />
        </div>
  );
};