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
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="grow mb-4 lg:mb-0">
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
