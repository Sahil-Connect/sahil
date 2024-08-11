import { useRouter } from "next/router";
import { HiPlus, HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { ListClients } from "@sahil/features/Clients/ListClients";

export default function Zones() {
  const router = useRouter();
  return (
    <section className="space-y-4">
      <ListClients />
    </section>
  );
}
