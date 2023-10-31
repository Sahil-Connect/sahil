import { useFetchCouriers } from "@/hooks/couriers";
import { CourierOveriewCard } from "./CourierOverviewCard";
import { JoinGrid } from "ui";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

export const ListCouriers = () => {
  const { data: couriers, error, loading } = useFetchCouriers();
  if (error) {
    return <p>Failed to load couriers</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <h3 className="text-lg">Latest Deliveries</h3>
          <div className="badge badge-accent">2 Couries</div>
        </div>
        <div>
          <JoinGrid>
            <button className="join-item btn btn-xs" title="Arrow Left">
              <HiArrowLeft />
            </button>
            <button
              className="join-item btn btn-xs btn-secondary"
              title="Arrow Right"
            >
              <HiArrowRight />
            </button>
          </JoinGrid>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {couriers.map((courier) => (
          <CourierOveriewCard key={courier.id} courier={courier} />
        ))}
      </div>
    </section>
  );
};
