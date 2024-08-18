import { FC } from "react";
import { Card } from "ui";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiEllipsisVertical,
  HiOutlineBriefcase,
  HiCalendarDays,
} from "react-icons/hi2";

export const DeliveryRequestOverviewCard = ({ request }) => {
  return (
    <Card title="Request ID: 1" titleSize="sm">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="badge gap-2 text-sm text-gray-500">
            <HiCalendarDays />
            {request.status}
          </div>
          <p className="text-sm text-gray-500">{request.date}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{request.time}</p>
        <p className="text-sm text-gray-500">{request.location}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">{request.deliveryType}</p>
        <p className="text-sm text-gray-500">{request.totalAmount}</p>
      </div>
      <div className="flex gap-4">
        <button className="btn btn-sm btn-primary">Accept</button>
        <button className="btn btn-sm">Decline</button>
      </div>
    </Card>
  );
};
