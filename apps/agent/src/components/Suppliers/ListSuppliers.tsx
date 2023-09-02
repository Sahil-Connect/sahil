import { SupplierOverviewCard } from "./SupplierOverviewCard";
import { useFetchSuppliers } from "@/hooks/suppliers";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export type SahilSupplier = {
  name: string;
  id: string;
};


export const ListSuppliers = () => {
  const { data: suppliers, error, loading } = useFetchSuppliers();

  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  if (error) {
    return (
      <div className="card card-compact bg-white shadow">
        <div className="card-body">
        <h3 className="card-title">Something went wrong...</h3>
        <p>Error loading suppliers, check your network connection. You can also try refreshing the page.</p>
        <div className="card-actions">
          <button className="btn btn-sm btn-secondary">Reload</button>
          <button className="btn btn-sm btn-outline">Go Back</button>
        </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <p>Loading suppliers...</p>
      </div>
    );
  }

  return (
    <div className="flex gap-2" ref={parent}>
      {suppliers && suppliers.map((supplier: SahilSupplier) => (
        <SupplierOverviewCard key={supplier.id} supplier={supplier} />
      ))}
    </div>
  );
};
