import { useRouter } from "next/router";
export default function OrdersPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen p-8">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
          <h1 className="text-3xl">Orders</h1>
          </div>
          <button className="btn btn-sm btn-primary" onClick={() => router.push("/orders/new/order_details")}>New Order</button>
        </div>
      </div>
    </main>
  );
}
