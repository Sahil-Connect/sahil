import { useRouter } from "next/router";
import { HiPlus, HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { ListZones } from "@sahil/features/Zones/ListZones";

export default function Zones() {
  const router = useRouter();
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl">Zones</h1>
        </div>
        <div className="flex gap-2">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => router.push("/orders/new/order_details")}
          >
            <HiPlus /> New Zone
          </button>
        </div>
      </div>
      <ListZones />
    </section>
  );
}
