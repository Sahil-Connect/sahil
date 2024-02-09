import { SupplierOverviewCard } from "./SupplierOverviewCard";
import { useFetchSuppliers } from "@sahil/lib/hooks/suppliers";
import { List, ListHeader } from "ui";

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
        renderItem={(supplier) => (
          // @ts-ignore
          <SupplierOverviewCard key={supplier.id} supplier={supplier} />
        )}
      />
    </section>
  );
};
