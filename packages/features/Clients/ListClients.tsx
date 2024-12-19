import { ClientOverviewCard } from "./ClientOverviewCard";
import { List, ListHeader, ListErrorState, ListPagination } from "ui";
import { useRouter } from "next/router";
import { useFetchSuppliers } from "@sahil/lib/hooks/suppliers";
import { useFetchBusinesses } from "@sahil/lib/hooks/businesses";

export const ListClients = () => {
  const router = useRouter();
  
  const { 
    data: suppliers = [], 
    loading: isSuppliersLoading,
    error: suppliersError 
  } = useFetchSuppliers();
  
  const { 
    data: businesses = [], 
    loading: isBusinessesLoading,
    error: businessesError 
  } = useFetchBusinesses();

  const isLoading = isSuppliersLoading || isBusinessesLoading;
  const hasError = suppliersError || businessesError;

  if (hasError) {
    return <ListErrorState />;
  }

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <ListHeader 
          size={businesses.length} 
          sizeLabel="Businesses" 
          title="Business Clients"
        >
        <List
          data={businesses}
          loading={isBusinessesLoading}
          cols={4}
          renderItem={(client) => (
            <ClientOverviewCard key={client.id} client={client as any} />
          )}
        />
        </ListHeader>
      </section>

      <section className="space-y-4">
        <ListHeader 
          size={suppliers.length} 
          sizeLabel="Suppliers" 
          title="Supplier Clients"
        >
        <List
          data={suppliers}
          loading={isSuppliersLoading}
          cols={4}
          renderItem={(client) => (
            <ClientOverviewCard key={client.id} client={client as any} />
          )}
          />
          </ListHeader>
      </section>
    </div>
  );
};