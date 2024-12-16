import { FC } from "react";
import { Orders } from "@sahil/lib/graphql/__generated__/graphql";
import { Card, IconButton } from "ui";
import Link from "next/link";
import { formatDateTime } from "@sahil/lib/dates";
import {
  HiOutlineCube,
  HiChevronRight

} from "react-icons/hi2";
import { EntityCard } from "../Shared/EntityCard";

type Props = {
  order: Partial<Orders>;
};

export const OrderOverviewCard: FC<Props> = ({ order }) => {
  const getStatusColor = (status: string) => {
    switch (status?.toUpperCase()) {
      case 'DELIVERED':
        return 'bg-success/10 text-success'
      case 'PENDING':
        return 'bg-warning/10 text-warning'
      case 'CANCELED':
        return 'bg-error/10 text-error'
      default:
        return 'bg-primary/10 text-primary'
    }
  }
  return (
    <Card className="w-full">
      <div className="p-2 space-y-4">
        {/* Header */}
        <Link href={`/orders/${order.id}`} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-full bg-gray-100">
              <HiOutlineCube className="w-5 h-5 text-gray-500" />
            </span>
            <h3 className="font-medium">
                ID: #{order.id?.slice(0, 8).toUpperCase()}
            </h3>
            <HiChevronRight className="w-5 h-5 text-gray-500" />
          </div>
          <div className={`badge badge-sm py-2 rounded-full text-xs ${getStatusColor(order.status_histories?.[0]?.status || 'PENDING')
            }`}>
            {order.status_histories?.[0]?.status || 'PENDING'}
          </div>
        </Link>

        {/* Locations */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 flex flex-col items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-0.5 h-16 bg-gray-200" />
            <div className="w-3 h-3 rounded-full border-2 border-primary" />
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <div className="text-sm text-gray-500">Origin</div>
              <div className="font-medium">{order.origin}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Destination</div>
              <div className="font-medium">{order.destination}</div>
            </div>
          </div>
        </div>
  
        {/* Customer Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-content">
                {order.business?.name?.charAt(0)}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Client name</div>
              <div className="font-medium">{order.business?.name}</div>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Contact</div>
            <div className="font-medium">{order.business?.phoneNumber}</div>
          </div>
        </div>

        {/* View Details */}
        <button className="w-full btn btn-ghost btn-sm">
          View detail
        </button>
      </div>
    </Card>
  );
};
