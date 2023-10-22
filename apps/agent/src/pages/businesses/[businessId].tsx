import { useRouter } from "next/router";
import { useFetchBusinesssByPK } from "@/hooks/businesses";
import { BusinessOrderHistory, BusinessProfileOverview } from "@/components/Businesses";

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
        <div className="flex gap-4">
            <div className="grow">
                <BusinessProfileOverview business={business}/>
            </div>
            <div className="basis-4/5 space-y-2">
                <BusinessOrderHistory />
            </div>
        </div>
    </div>
  );
}
