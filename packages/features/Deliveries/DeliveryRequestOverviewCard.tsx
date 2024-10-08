import { FC } from "react";
import { Card } from "ui";
import { HiCalendarDays, HiOutlineArrowRight } from "react-icons/hi2";
import Link from "next/link";

export const DeliveryRequestOverviewCard: FC<{ request: any }> = ({ request }) => {
  console.log(request);
  const hasActions = false;
  const createdDate = new Date(request.created_at);
  const updatedDate = new Date(request.updated_at);

  return (
    <Card title={`Request ID: ${request.id.slice(0, 8)}`} titleSize="sm">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="badge gap-2 text-sm text-gray-500">
            <HiCalendarDays />
            {request.status}
          </div>
          <p className="text-sm text-gray-500">{createdDate.toLocaleDateString()}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{createdDate.toLocaleTimeString()}</p>
        <p className="text-sm text-gray-500">Courier ID: {request?.courierId?.slice(0, 8)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">Delivery Method: {request.delivery_method || 'Not specified'}</p>
        <p className="text-sm text-gray-500">Orders: {request.delivery_request_orders.length}</p>
      </div>
      <p className="text-sm text-gray-500">Last Updated: {updatedDate.toLocaleString()}</p>
      {hasActions && (
        <div className="flex gap-4">
          <button className="btn btn-sm btn-primary">Accept</button>
          <button className="btn btn-sm">Decline</button>
        </div>
      )}
      <Link href={`/requests/${request.id}`} className="btn btn-sm rounded-lg border border-[#067a46]/20 border-b-[#067a46]/70 border-t-[#067a46]/70 bg-gradient-to-b from-[#067a46] to-[#056a3e] px-4 pb-3 pt-2.5 font-medium leading-none text-white antialiased shadow-md ring-2 ring-[#067a46]">
      <span className="drop-shadow-sm">View Details</span> <HiOutlineArrowRight />
      </Link>
    </Card>
  );
};
