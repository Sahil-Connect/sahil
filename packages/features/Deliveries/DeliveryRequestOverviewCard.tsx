import { FC } from "react";
import { Card, Button } from "ui";
import { HiCalendarDays, HiOutlineArrowRight } from "react-icons/hi2";
import Link from "next/link";

export const DeliveryRequestOverviewCard: FC<{ request: any }> = ({ request }) => {
  console.log(request);
  const hasActions = false;
  const createdDate = new Date(request.created_at);
  const updatedDate = new Date(request.updated_at);

  return (
    <Card className="space-y-4">
      <div className="flex justify-between">
        <div>
          <h3 className="text-sm card-title">Request ID: ${request.id.slice(0, 8)}</h3>
        </div>
        <div className="flex gap-2">
          <div className="badge gap-2 text-sm text-gray-500">
            {request.status}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{createdDate.toLocaleTimeString()}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">Delivery Method: {request.delivery_method || 'Not specified'}</p>
        <p className="text-sm text-gray-500">Orders: {request.delivery_request_orders.length}</p>
      </div>


      <div className="flex justify-between items-center gap-2">
      <button className="btn btn-sm btn-primary grow">Accept</button>
      <button className="btn btn-sm grow">Decline</button>
      </div>
    </Card>
  );
};
