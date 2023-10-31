import { useRouter } from "next/router";
import { HiPlus, HiOutlineDocumentMagnifyingGlass } from 'react-icons/hi2';
import { OrdersList } from "@/Orders/OrdersList";

export default function OrdersPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen p-8">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
          <h1 className="text-3xl">Orders</h1>
          </div>
          <div className="flex gap-2">
          <button className="btn btn-sm">
            <HiOutlineDocumentMagnifyingGlass />
            track Order</button>
          <button className="btn btn-sm btn-primary" onClick={() => router.push("/orders/new/order_details")}><HiPlus /> New Order</button>
          </div>
        </div>
        <OrdersList />
      </div>
    </main>
  );
}
