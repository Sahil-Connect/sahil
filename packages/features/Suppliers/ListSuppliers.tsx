import { SupplierOverviewCard } from "./SupplierOverviewCard";
import { useFetchSuppliers } from "@sahil/lib/hooks/suppliers";
import { List, ListHeader } from "ui";

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

  return (
    <section className="space-y-4">
      <ListHeader
        size={suppliersCount?.count}
        sizeLabel="Suppliers"
        title="Suppliers"
      >
        <></>
      </ListHeader>
      <List
        data={suppliers}
        error={error}
        loading={loading}
        cols={4}
        renderItem={(supplier: SahilSupplier) => (
          <SupplierOverviewCard key={supplier.id} supplier={supplier} />
        )}
      />
    </section>
  );
};
