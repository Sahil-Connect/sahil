import { useRouter } from "next/router";
import { useFetchDeliveryByPK } from "@sahil/lib/hooks/deliveries";

export default function DeliveryPage() {
  const router = useRouter();
  const { deliveryId } = router.query;
  const {
    data: delivery,
    error,
    loading,
  } = useFetchDeliveryByPK(deliveryId as string);
  if (error) return <p>error</p>;
  if (loading) return <p>loading</p>;
  if (delivery?.length === 0) return <p>No delivery found</p>;
  return <div>Delivery Page</div>;
}
