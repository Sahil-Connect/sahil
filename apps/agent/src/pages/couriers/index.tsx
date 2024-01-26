import { ListCouriers } from "@sahil/features/Couriers/ListCouriers";
import { HiOutlinePlus, HiOutlineMap } from "react-icons/hi2";
import Link from "next/link";
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

export default function CouriersPage() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Sahil - Couriers</h1>
        <div className="flex gap-2">
          <Link href="/couriers/track" className="btn btn-sm">
            <HiOutlineMap /> Track Courier
          </Link>
          <Link
            href="couriers/register/personal_info"
            className="btn btn-sm btn-primary"
          >
            <HiOutlinePlus />
            Register Courier
          </Link>
        </div>
      </div>
      <Stats stats={stats} />
      <ListCouriers />
    </section>
  );
}
