import { useRouter } from "next/router";
import { HiPlus, HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { ListOrders } from "@sahil/features/Orders/ListOrders";
import { Card, Stats, Stat } from "ui";

export default function Orders() {
  const router = useRouter();
  return (
    <section className="space-y-4">
      <Card>
        <div className="flex justify-between items-center">
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
