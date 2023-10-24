import {
    HiArrowLeft,
    HiArrowRight,
    HiMinus,
    HiPlus,
    HiMiniMagnifyingGlass,
    HiOutlineTruck,
    HiXMark,
  } from "react-icons/hi2";
  import { useFetchSuppliers } from "@/hooks/suppliers";

export const RecommendedSuppliers = () => {
    const { data: suppliers, error, loading } = useFetchSuppliers();
  
    if (error) {
      return <p>Failed to load suppliers.</p>;
    }
  
    if (loading) {
      return <p>Loading Suppliers</p>;
    }
    return (
      <div className="card card-compact shadow">
        <div className="card-body">
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <h3 className="text-xl">
                Recommended Suppliers{" "}
                <span className="text-sm">{suppliers.length} suppliers</span>
              </h3>
            </div>
            <div className="flex gap-2">
              {suppliers.map((supplier) => (
                <SupplierSummary key={supplier.id} supplier={supplier} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export const SupplierSummary = ({ supplier }) => {
    return (
      <div className="badge badge-md badge-outline badge-primary gap-2">
        <HiOutlineTruck /> {supplier.name}
      </div>
    );
  };