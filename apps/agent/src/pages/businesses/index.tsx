import { ListBusinesses } from "@sahil/features/businesses/ListBusinesses";
import { useRouter } from "next/router";
import { Card, Stats, Stat } from "ui";
import { HiPlus, HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";

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

export default function Business() {
  const router = useRouter();
  return (
    <section className="space-y-4">
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl">Businesses</h1>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-sm">
              <HiOutlineDocumentMagnifyingGlass />
              track Order
            </button>
            <button
              className="btn btn-sm btn-primary normal-case"
              onClick={() => router.push("/businesses/register/basic_info")}
            >
              <HiPlus /> Register Business
            </button>
          </div>
        </div>
      </Card>
      <h3 className="text-md">Overview</h3>
      <Stats stats={stats} />
      <ListBusinesses />
    </section>
  );
}
