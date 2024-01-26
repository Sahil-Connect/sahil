import { ListBusinesses } from "@sahil/features/Businesses/ListBusinesses";
import { useRouter } from "next/router";
import { Card } from "ui";
import { HiPlus, HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";

export default function Business() {
  const router = useRouter();
  return (
    <section className="space-y-4">
      <Card>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl">Businesses</h1>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-sm">
              <HiOutlineDocumentMagnifyingGlass />
              track Order
            </button>
            <button
              className="btn btn-sm btn-primary normal-case"
              onClick={() => router.push("/businesses/register/basic_info")}
            >
              <HiPlus /> Register Business
            </button>
          </div>
        </div>
      </Card>
      <div>
        <ListBusinesses />
      </div>
    </section>
  );
}
