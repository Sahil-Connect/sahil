import { useRouter } from "next/router";
import { useFetchSupplierByPK } from "@sahil/lib/hooks/suppliers";
import {
  SupplierOrderHistory,
  SupplierProducts,
  ServiceZones,
  SupplierProfileOverview,
} from "@sahil/features/Suppliers";
import { Suppliers } from "@sahil/lib/graphql/__generated__/graphql";

export default function SupplierPage() {
  const router = useRouter();
  const { supplierId } = router.query;
  const { data: supplier, error, loading } = useFetchSupplierByPK();
  if (error) {
    return <p>Failed</p>;
  }
  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row sm:gap-1">
        <div className="space-y-2">
          <SupplierProfileOverview supplier={supplier as Suppliers} />
          <ServiceZones />
        </div>
        <div className="basis-5/6 space-y-4">
          <SupplierProducts
            productsCount={supplier?.products_aggregate?.aggregate?.count || 0}
          />
          <SupplierOrderHistory supplierId={supplierId as string} />
        </div>
      </div>
    </div>
  );
}
