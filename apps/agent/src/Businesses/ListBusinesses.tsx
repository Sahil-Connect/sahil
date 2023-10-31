import { BusinessOverviewCard } from "./BusinessOverviewCard";
import { useFetchBusinesses } from "@/hooks/businesses";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export type SahilBusiness = {
  name: string;
  id: string;
};

export const ListBusinesses = () => {
  const { data: businesses, error, loading } = useFetchBusinesses();
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  if (error) {
    return (
      <div className="card card-compact bg-white shadow">
        <div className="card-body">
          <h3 className="card-title">Something went wrong...</h3>
          <p>
            Error loading businesses, check your network connection. You can
            also try refreshing the page.
          </p>
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
        <p>Loading businesses...</p>
      </div>
    );
  }

  return (
    <div className="grid place-items-center gap-4 grid-cols-auto-250 xl:grid-cols-4" ref={parent}>
      {businesses &&
        businesses.map((business: SahilBusiness) => (
          <BusinessOverviewCard key={business.id} business={business} />
        ))}
    </div>
  );
};
