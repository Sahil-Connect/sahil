import { useRouter } from "next/router";
import { useFetchCourierByPK } from "@/hooks/couriers";
import {
  CourierStats,
  CourierProfileOveriew,
  LatestDeliveries,
} from "@/Couriers";
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
    <main className="p-8 space-y-4">
      <section className="flex gap-4">
        <CourierProfileOveriew courier={courier}/>
        <LatestDeliveries courierId={courierId} />
      </section>
    </main>
  );
}
