import { BusinessOverviewCard } from "./BusinessOverviewCard";
import { useFetchBusinesses } from "@/hooks/businesses";

export type SahilBusiness = {
  name: string;
  id: string;
};


export const ListBusinesses = () => {
  const { data: businesses, error, loading } = useFetchBusinesses();

  if (error) {
    return (
      <div className="card card-compact bg-white shadow">
        <div className="card-body">
        <h3 className="card-title">Error loading businesses</h3>
        <p>Check your network connection. You can also try refreshing the page.</p>
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
    <div className="space-y-2">
      {businesses && businesses.map((business: SahilBusiness) => (
        <BusinessOverviewCard key={business.id} business={business} />
      ))}
    </div>
  );
};
