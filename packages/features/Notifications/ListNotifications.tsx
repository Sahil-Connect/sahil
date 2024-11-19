import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { NotificationOverview } from './NotificationOverview';
import { Button } from 'ui';

interface Notification {
  id: string;
  type: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  entityId: string;
}

export const ListNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchNotifications = async () => {
      // Stubbed data for demonstration
      const dummyNotifications: Notification[] = [
        {
          id: '1',
          type: 'order',
          title: 'New Order Received',
          description: 'Order #12345 has been placed for Office Supplies Bundle.',
          time: '2 hours ago',
          read: false,
          entityId: '12345'
        },
        {
          id: '2',
          type: 'stock',
          title: 'Low Stock Alert',
          description: 'Printer Paper is running low. Consider restocking soon.',
          time: '1 day ago',
          read: false,
          entityId: 'printer-paper'
        },
        {
          id: '3',
          type: 'payment',
          title: 'Payment Received',
          description: 'Payment of $1,250.00 received for Order #12340.',
          time: '3 days ago',
          read: true,
          entityId: '12340'
        },
      ];

      await new Promise(resolve => setTimeout(resolve, 500));
      setNotifications(dummyNotifications);
    };

    if (session?.user) {
      fetchNotifications();
    }
  }, [session]);

  const markAsRead = async (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
    // Here you would typically also update the server
    console.log(`Marking notification ${id} as read`);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Notifications</h2>
        <div className="border border-gray-300 rounded p-2">
          Filter: All Notifications
        </div>
      </div>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications</p>
      ) : (
        notifications.map((notification) => (
          <NotificationOverview
            key={notification.id}
            notification={notification}
            onMarkAsRead={markAsRead}
          />
        ))
      )}
      {notifications.length > 0 && (
        <div className="flex justify-between items-center mt-4">
          <span>Page 1 of 5</span>
          <Button variant="outline">Next &gt;</Button>
        </div>
      )}
    </div>
  );
};