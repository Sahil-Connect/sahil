import { useRouter } from "next/router";
import { HiPlus, HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { ListClients } from "@sahil/features/Clients/ListClients";

export default function Clients() {
  const router = useRouter();
  
  return (
    <main className="container mx-auto px-4 py-6">
      <ListClients />
    </main>
  );
}
