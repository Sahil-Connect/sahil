import { useRouter } from "next/router";
import { useFetchBusinesssByPK } from "@/hooks/businesses";
import {
  BusinessOrderHistory,
  BusinessProfileOverview,
} from "@/components/Businesses";

export default function BusinessPage() {
  const router = useRouter();
  const { businessId } = router.query;
  const {
    data: business,
    error,
    loading,
  } = useFetchBusinesssByPK(businessId as string);

  if (error) {
    return <p>Failed</p>;
  }

  return (
    <div className="min-h-screen p-8 space-y-4">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Business</a>
          </li>
          <li>{business?.name}</li>
        </ul>
      </div>
      <div className="flex justify-between">
        <div>
          <button className="btn btn-sm btn-outline">Back</button>
        </div>
        <div>
          <button className="btn btn-sm btn-primary">New Order</button>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="grow">
          <BusinessProfileOverview business={business} />
        </div>
        <div className="basis-4/5 space-y-2">
          <BusinessOrderHistory />
        </div>
      </div>
    </div>
  );
}
