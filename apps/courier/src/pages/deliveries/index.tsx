import { ListDeliveries } from "@sahil/features/Deliveries/ListDeliveries";
import { Button, IconButton } from "ui";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi2";


export default function Deliveries() {
  return (
    <section className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <IconButton icon={HiOutlineArrowLeft} className="btn btn-ghost btn-md" />
        <Button variant="outline" className="text-sm btn-sm" size="sm">
          Past Deliveries <HiOutlineArrowRight />
        </Button>
      </div>
      <div className="space-y-2">
          <h3 className="text-2xl font-bold">Hello, James</h3>
          <p className="text-sm text-gray-500">
            Here are your delivery requests
          </p>
        </div>
        <div className="divider"></div>
      <ListDeliveries />
    </section>
  );
}
