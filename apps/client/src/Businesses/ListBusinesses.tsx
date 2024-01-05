import { useState } from "react";
import { BusinessOverviewCard } from "./BusinessOverviewCard";
import { useFetchBusinesses } from "@/hooks/businesses";
import { List, ListHeader, ListErrorState } from "ui";

export type SahilBusiness = {
  name: string;
  id: string;
  contactName: string;
  type: string;
  phoneNumber: string;
  addresses: Array<{
    street_address: string,
  }>;
};

export const ListBusinesses = () => {
  const [page, setPage] = useState(0);
  const {
    data: businesses,
    error,
    loading,
    businessCount,
  } = useFetchBusinesses();

  const onNextPage = () => {
    setPage((prev) => prev + 1);
  };
  const onPreviousPage = () => {
    setPage((prev) => {
      if (page > 0) {
        return prev;
      }
      return prev - 1;
    });
  };

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
      <ListHeader
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        size={businessCount?.count}
        sizeLabel="Businesses"
        title="Businesses"
      />
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
