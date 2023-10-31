import { SupplierOverviewCard } from "./SupplierOverviewCard";
import { useFetchSuppliers } from "@/hooks/suppliers";
import { JoinGrid, List, ListErrorState } from "ui";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

export type SahilSupplier = {
  id: string;
  name: string;
  phoneNumber: string;
  streetAddress: string;
  contactName: string;
  zone: string;
  categories: Array<{
    category_name: string;
  }>;
};

export const ListSuppliers = () => {
  const {
    data: suppliers,
    error,
    loading,
    suppliersCount,
  } = useFetchSuppliers();

  if (error) {
    return (
      <ListErrorState
        heading="Unable to load products..."
        message="Products aren't loading due to a technical problem on our side. Please
      try again."
      />
    );
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between bg-primary">
        <div className="flex gap-2 items-center">
          <h3 className="text-lg">Suppliers</h3>
          <div className="badge badge-accent">
            {suppliersCount.count} Suppliers
          </div>
        </div>
        <div>
          <JoinGrid>
            <button className="join-item btn btn-sm" title="Left">
              <HiArrowLeft />
            </button>
            <button className="join-item btn btn-sm" title="Right">
              <HiArrowRight />
            </button>
          </JoinGrid>
        </div>
      </div>
      <List
        data={suppliers}
        loading={loading}
        renderItem={(supplier: SahilSupplier) => (
          <SupplierOverviewCard key={supplier.id} supplier={supplier} />
        )}
      />
    </section>
  );
};
