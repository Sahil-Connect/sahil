import { useRouter } from "next/router";
import { useFetchSupplierByPK } from "@sahil/lib/hooks/suppliers";
import { useFetchBusinessByPK } from "@sahil/lib/hooks/businesses";
import {
  SupplierOrderHistory,
  SupplierProducts,
  ServiceZones,
  SupplierProfileOverview,
} from "@sahil/features/Suppliers";
import {
  BusinessProfileOverview,
  BusinessOrderHistory,
} from "@sahil/features/businesses";

export default function ClientPage() {
  const router = useRouter();
  const { clientId, type } = router.query;
  const isSupplier = type === 'supplier';

  if (!clientId || !type) {
    return <div>Invalid client details</div>;
  }

  if (isSupplier) {
    return <SupplierView clientId={clientId as string} />;
  }

  return <BusinessView clientId={clientId as string} />;
}

function SupplierView({ clientId }: { clientId: string }) {
  const {
    data: supplier,
    error: supplierError,
    loading: supplierLoading
  } = useFetchSupplierByPK(clientId);

  if (supplierLoading) {
    return <p>Loading...</p>;
  }

  if (supplierError) {
    return <div>Error loading supplier details</div>;
  }

  if (!supplier) {
    return <div>Supplier not found</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row sm:gap-1">
        <div className="space-y-2">
          <SupplierProfileOverview supplier={supplier} />
          <ServiceZones />
        </div>
        <div className="basis-5/6 space-y-4">
          <SupplierProducts
            productsCount={supplier?.products_aggregate.aggregate.count}
          />
          <SupplierOrderHistory supplierId={clientId} />
        </div>
      </div>
    </div>
  );
}

function BusinessView({ clientId }: { clientId: string }) {
  const {
    data: business,
    error: businessError,
    loading: businessLoading
  } = useFetchBusinessByPK(clientId);

  if (businessLoading) {
    return <p>Loading...</p>;
  }

  if (businessError) {
    return <div>Error loading business details</div>;
  }

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row sm:gap-1">
        <div className="space-y-2">
          <BusinessProfileOverview business={business} />
        </div>
        <div className="basis-5/6 space-y-4">
          <BusinessOrderHistory businessId={clientId} />
        </div>
      </div>
    </div>
  );
}