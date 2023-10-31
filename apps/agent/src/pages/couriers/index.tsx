import { ListCouriers } from "@/Couriers";
export default function CouriersPage() {
  return (
    <main className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Sahil - Couriers</h1>
        <div className="flex gap-2">
          <button className="btn btn-sm">track Courier</button>
          <button className="btn btn-sm btn-primary">Register Courier</button>
        </div>
      </div>
      <ListCouriers />
    </main>
  );
}
