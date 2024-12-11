import { ListDeliveryRequests } from "@sahil/features/Deliveries/ListDeliveryRequests";
import { Button } from "ui";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Requests() {
  return (
    <section className="p-4 space-y-4">
      <div className="flex justify-between items-start">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Hello, James</h3>
        <p className="text-sm text-gray-500">Here are your delivery requests</p>
      </div>
      <div>
        <Button variant="outline" className="text-sm btn-sm" size="sm"> Past Requests <HiOutlineArrowRight /></Button>
      </div>
      </div>
      <ListDeliveryRequests />
    </section>
  );
}
