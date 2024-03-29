import { useState } from "react";
import { BusinessOverviewCard } from "./BusinessOverviewCard";
import { useFetchBusinesses } from "@sahil/lib/hooks/businesses";
import { List, ListHeader, ListErrorState, ListPagination } from "ui";

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
        size={businessCount?.count}
        sizeLabel="Businesses"
        title="Businesses"
      >
        <ListPagination
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
        />
      </ListHeader>
      <List
        data={businesses}
        loading={loading}
        renderItem={(business) => (
          // @ts-ignore
          <BusinessOverviewCard key={business.id} business={business} />
        )}
      />
    </section>
  );
};
