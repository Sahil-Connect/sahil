import { Card } from "ui";
import { HiCalendarDays, HiOutlineArrowRight } from "react-icons/hi2";
import Link from "next/link";

export const DeliveryOverviewCard = ({ delivery }: { delivery: any }) => {
  console.log(delivery);
  return (
    <Card title={`Order ID: ${delivery.id}`} titleSize="sm">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="text-sm text-gray-500">{delivery.status}</p>
          <p className="text-sm text-gray-500">{delivery.date}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{delivery.time}</p>
        <p className="text-sm text-gray-500">{delivery.location}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{delivery.deliveryType}</p>
        <p className="text-sm text-gray-500">{delivery.totalAmount}</p>
      </div>
      <Link
        href={`/deliveries/${delivery.id}`}
        className="btn btn-sm btn-primary"
      >
        View Details <HiOutlineArrowRight />
      </Link>
    </Card>
  );
};
