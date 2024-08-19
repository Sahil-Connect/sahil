import { useRouter } from "next/router";
import { useFetchDeliveryRequestByPK } from "@sahil/lib/hooks/deliveries";
export default function RequestPage() {
  const router = useRouter();
  const { requestId } = router.query;
  const {
    data: deliveryRequest,
    error,
    loading,
  } = useFetchDeliveryRequestByPK(requestId as string);
  if (error) return <p>error</p>;
  if (loading) return <p>loading</p>;
  if (deliveryRequest?.length === 0) return <p>No delivery request found</p>;
  return <div>Request Page</div>;
}
