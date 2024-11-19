import Link from "next/link";
import { useRouter } from "next/router";
import { useFetchBusinessByPK } from "@sahil/lib/hooks/businesses";
import {
  BusinessOrderHistory,
  BusinessProfileOverview,
} from "@sahil/features/businesses";

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
      <div className="w-full flex flex-col lg:flex-row sm:gap-2">
        <div className="mb-4 lg:mb-0 lg:w-4/12">
          {
            // @ts-ignore
            <BusinessProfileOverview business={business} />
          }
        </div>
        <div className="basis-4/5 space-y-2">{<BusinessOrderHistory />}</div>
      </div>
    </div>
  );
}
