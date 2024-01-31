import { useFetchLatestDeliveries } from "@sahil/lib/hooks/couriers";
import { DeliveryOverviewCard } from "./DeliveryOverviewCard";
import { JoinGrid } from "ui";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

export const LatestDeliveries = ({ courierId }) => {
  const {
    data: deliveries,
    error,
    loading,
  } = useFetchLatestDeliveries(courierId);
  if (error) {
    return <p>Failed to load deliveries</p>;
  }
  if (loading) {
    return <p>Loading deliveries</p>;
  }
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <h3 className="text-lg">Latest Deliveries</h3>
          <div className="badge badge-accent">45 deliveries</div>
        </div>
        <div>
          <JoinGrid>
            <button className="join-item btn btn-xs" title="Arrow Left">
              <HiArrowSmallLeft />
            </button>
            <button
              className="join-item btn btn-xs btn-secondary"
              title="Arrow Right"
            >
              <HiArrowSmallRight />
            </button>
          </JoinGrid>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {deliveries.map((delivery) => (
          <DeliveryOverviewCard key={delivery.id} delivery={delivery} />
        ))}
      </div>
    </section>
  );
};
