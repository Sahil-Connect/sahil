import { useRouter } from "next/router";
import { HiPlus, HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { ListOrders } from "@sahil/features/Orders/ListOrders";
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

export default function OrdersPage() {
  const router = useRouter();
  return (
    <section className="space-y-4">
      <Card>
        <div className="flex flex-col gap-2 justify-between md:flex-row md:items-center">
          <div>
            <h1 className="text-xl">Orders</h1>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-sm">
              <HiOutlineDocumentMagnifyingGlass />
              track Order
            </button>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => router.push("/orders/new/order_details")}
            >
              <HiPlus /> New Order
            </button>
          </div>
        </div>
      </Card>
      <ListOrders />
    </section>
  );
}
