import { ListSuppliers } from "@sahil/features/Suppliers";
import FilterSuppliersModal from "@sahil/features/Suppliers/FilterSuppliersModal";
import { useRouter } from "next/router";
import { HiPlus } from "react-icons/hi2";

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
          <div className="flex flex-col gap-2 justify-between md:flex-row md:items-center">
            <div>
              <h1 className="text-xl">Suppliers</h1>
            </div>
            <div className="flex gap-2">
              <button
                className="btn btn-sm btn-primary normal-case"
                onClick={() => router.push("/suppliers/register/business_info")}
              >
                <HiPlus />
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
