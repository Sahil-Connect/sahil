import { ListSuppliers } from "@sahil/features/Suppliers";
import FilterSuppliersModal from "@sahil/features/Suppliers/FilterSuppliersModal";
import { useRouter } from "next/router";
import { HiOutlinePlusCircle } from "react-icons/hi2";

import { Card, Stats, Stat } from "ui";

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
        <Card>
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h1 className="text-xl">Suppliers</h1>
            </div>
            <div className="w-full lg:w-fit flex justify-end gap-4">
              <button
                className="btn btn-sm btn-primary normal-case"
                onClick={() => router.push("/suppliers/register/business_info")}
              >
                <HiOutlinePlusCircle className="text-lg" />
                Register Supplier
              </button>
            </div>
          </div>
        </Card>
        <ListSuppliers />
      </section>
    </>
  );
}
