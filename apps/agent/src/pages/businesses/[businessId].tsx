import Link from "next/link";
import { useRouter } from "next/router";
import { useFetchBusinessByPK } from "@/hooks/businesses";
import {
  BusinessOrderHistory,
  BusinessProfileOverview,
} from "@/Businesses";

export default function BusinessPage() {
  const router = useRouter();
  const { businessId } = router.query;
  const {
    data: business,
    error,
    loading,
  } = useFetchBusinessByPK(businessId as string);

  if (error) {
    return <p>Failed</p>;
  }

  return (
    <div className="space-y-4">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/businesses`}>Businesses</Link>
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
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="grow mb-4 lg:mb-0">
          <BusinessProfileOverview business={business} />
        </div>
        <div className="basis-4/5 space-y-2">
          <BusinessOrderHistory />
        </div>
      </div>
    </div>
  );
}
