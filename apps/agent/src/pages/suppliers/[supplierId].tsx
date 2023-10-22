import { useRouter } from "next/router";
import { useFetchSupplierByPK } from "@/hooks/suppliers";
import {
  Clients,
  SupplierOrderHistory,
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
    console.log(error);
    return <p>Failed</p>;
  }
  return (
    <div className="min-h-screen p-8 space-y-4">
      <div className="flex gap-4">
        <div className="space-y-2">
          <SupplierProfileOverview supplier={supplier} />
          <ServiceZones />
        </div>
        <div className="basis-4/5 space-y-2">
          <div className="flex justify-between gap-4">
            <SupplierOrderHistory />
            <ProductsList />
          </div>
          <div>
            <Clients />
          </div>
        </div>
      </div>
    </div>
  );
}
