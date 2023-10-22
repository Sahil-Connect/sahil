import { useRouter } from "next/router";
import { useFetchSupplierByPK } from "@/hooks/suppliers";
import {
  LatestOrders,
  ProductsList,
  ServiceZones,
  SupplierProfileOverview,
} from "@/components/Suppliers";

export default function SupplierPage() {
  const router = useRouter();
  const { supplierId } = router.query;
  const {
    data: supplier,
    error,
    loading,
  } = useFetchSupplierByPK(supplierId as string);
  if (error) {
    return <p>Failed</p>;
  }
  return (
    <div className="min-h-screen p-8 space-y-4">
      <ServiceZones />
      <div className="flex gap-8">
        <div className="flex justify-between basis-4/5 gap-4">
          <LatestOrders />
          <ProductsList />
        </div>
        <div className="basis-1/5">
          <SupplierProfileOverview supplier={supplier}/>
        </div>
      </div>
    </div>
  );
}
