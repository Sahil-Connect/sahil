import { useState } from "react";
import { BusinessOverviewCard } from "./BusinessOverviewCard";
import { useFetchBusinesses } from "@/hooks/businesses";
import { List, ListHeader, ListErrorState } from "ui";

export type SahilBusiness = {
  name: string;
  id: string;
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

  return (
    <section className="space-y-4">
      <ListHeader
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        size={businessCount?.count}
        sizeLabel="Businsses"
        title="Businsses"
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
