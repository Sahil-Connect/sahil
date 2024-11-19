import { useRouter } from "next/router";
import { HiPlus, HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { ListAgents } from "@sahil/features/Agents/ListAgents";

export default function Agents() {
  const router = useRouter();
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl">Agent</h1>
        </div>
        <div className="flex gap-2">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => router.push("/orders/new/order_details")}
          >
            <HiPlus /> New Agent
          </button>
        </div>
      </div>
      <ListAgents />
    </section>
  );
}
