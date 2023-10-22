import { useRouter } from "next/router";
import { useFetchBusinesssByPK } from "@/hooks/businesses";

export default function BusinessPage() {
  const router = useRouter();
  const { businessId } = router.query;
  const {
    data: business,
    error,
    loading,
  } = useFetchBusinesssByPK(businessId as string);

  if (error) {
    console.log(error);
    return <p>Failed</p>;
  }

  return (
    <div className="min-h-screen p-8 space-y-4">
        <h1>{business.name}</h1>
    </div>
  );
}
