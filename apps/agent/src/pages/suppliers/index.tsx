import { ListSuppliers } from "@/Suppliers";
import FilterSuppliersModal from "@/Suppliers/FilterSuppliersModal";
import { useRouter } from "next/router";
import { HiOutlinePlusCircle } from "react-icons/hi2";

import { Stats, Stat } from "ui";

const stats: Stat[] = [
  {
    title: "Reports",
    value: 9,
    desc: "Oct 1st - Nov 1st",
    trend: "negative",
  },
  {
    title: "Registered Businesses",
    value: 40,
    desc: "Oct 1st - Nov 1st",
    trend: "negative",
  },
  {
    title: "Processed Orders",
    value: 201,
    desc: "Oct 1st - Nov 1st",
    trend: "positive",
  },
];

export default function Suppliers() {
  const router = useRouter();
  return (
    <>
      <section className="space-y-4">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h1 className="text-3xl">Partner Suppliers</h1>
          </div>
          <div className="w-full lg:w-fit flex justify-end gap-4">
            <FilterSuppliersModal />
            <button
              className="btn btn-sm btn-primary normal-case"
              onClick={() => router.push("/suppliers/register/business_info")}
            >
              <HiOutlinePlusCircle className="text-lg" />
              Register Supplier
            </button>
          </div>
        </div>
        <Stats stats={stats} />
        <ListSuppliers />
      </section>
    </>
  );
}
