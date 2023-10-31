import { BusinessOverviewCard } from "./BusinessOverviewCard";
import { useFetchBusinesses } from "@/hooks/businesses";
import { List, ListHeader, ListErrorState } from "ui";

export type SahilBusiness = {
  name: string;
  id: string;
};

export const ListBusinesses = () => {
  const { data: businesses, error, loading, businessCount } = useFetchBusinesses();
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
      <ListHeader size={businessCount?.count} sizeLabel="Businsses" title="Businsses" />
      <List
        data={businesses}
        loading={loading}
        renderItem={(business: SahilBusiness) => (
          <BusinessOverviewCard key={business.id} business={business} />
        )}
      />
    </section>
  );
};
