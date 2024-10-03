import React from "react";
import { Button, Card } from "ui";
import { HiOutlineBell, HiOutlineCheckCircle, HiOutlineExclamationCircle } from "react-icons/hi";
import { useRouter } from 'next/router';

interface NotificationProps {
  notification: {
    id: string;
    type: string;
    title: string;
    description: string;
    time: string;
    read: boolean;
    entityId: string;
  };
  onMarkAsRead: (id: string) => void;
}

const NotificationIcon: React.FC<{ type: string }> = ({ type }) => {
  const iconColors: { [key: string]: string } = {
    order: "bg-green-500",
    stock: "bg-yellow-500",
    payment: "bg-blue-500",
  };

  return (
    <div
        className={`p-2 border rounded w-fit ${iconColors[type] || "bg-gray-500"}`}
        >
        {type === 'order' && <HiOutlineCheckCircle />}
        {type === 'stock' && <HiOutlineExclamationCircle />}
        {type === 'payment' && <HiOutlineBell />}
        {!['order', 'stock', 'payment'].includes(type) && <HiOutlineBell />}
        </div>
  );
};

export const NotificationOverview: React.FC<NotificationProps> = ({
  notification,
  onMarkAsRead,
}) => {
  const { id, type, title, description, time, read, entityId } = notification;
  const router = useRouter();

  const handleClick = () => {
    if (type === 'order') {
      router.push(`/orders/${entityId}`);
    } else if (type === 'stock') {
      router.push(`/inventory/${entityId}`);
    } else if (type === 'payment') {
      router.push(`/payments/${entityId}`);
    } else {
      router.push(`/notifications/${id}`);
    }
  };

  return (
    <Card>
      <div onClick={handleClick} className="cursor-pointer">
        <div className="flex items-start space-x-4">
          <NotificationIcon type={type} />
          <div className="flex-1">
            <h3 className="card-title text-sm">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-xs text-gray-400 mt-1">{time}</p>
          </div>
          {!read && (
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onMarkAsRead(id);
              }}
            >
              Mark as Read
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
