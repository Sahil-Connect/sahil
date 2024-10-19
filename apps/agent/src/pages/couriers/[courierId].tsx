import { CourierProfileOverview } from "@sahil/features/Couriers/components/CourierProfileOverview";
import { Couriers } from "@sahil/lib/graphql/__generated__/graphql";

import { useRouter } from "next/router";
import { useFetchCourierByPK } from "@sahil/lib/hooks/couriers";
import {
  CourierStats,
  LatestDeliveries,
  ZoneInformation,
  VehicleInfo,
} from "@sahil/features/Couriers";
export default function CourierPage() {
  const router = useRouter();
  const { courierId } = router.query;
  const {
    data: courier,
    error,
    loading,
  } = useFetchCourierByPK(courierId as string);
  if (error) {
    return <p>Failed to load courier</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }


  return (
      <section className="flex">
        <div className="basis-1/4">
          <CourierProfileOverview courier={courier as Couriers} />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="space-y-4 grow">
          <CourierStats />
          <LatestDeliveries courierId={courierId as string} />
          <VehicleInfo />
          <ZoneInformation />
        </div>
      </section>
  );
}
