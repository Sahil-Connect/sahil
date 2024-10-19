import { useRouter } from "next/router";
import { useFetchDeliveryByPK } from "@sahil/lib/hooks/deliveries";
import { Card } from "ui";
import { OrderItem } from "@sahil/features/Orders/OrderItems";
import { OrderInfoItem } from "@sahil/features/Orders/OrderDetails";
import { formatDateTime } from "@sahil/lib/dates";
import {
  HiCalendarDays,
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineMap,
  HiOutlineMapPin,
  HiOutlineCheck,
  HiOutlineTruck,
} from "react-icons/hi2";

const DeliveryOrders = ({ order, deliveryStatus, onUpdateStatus }) => {
  console.log(order);
  return (
    <div className="space-y-4">
      {order?.order_items.map((order) => (
        <Card key={order.id} className="space-y-4">
          <h4 className="text-sm font-semibold">Order Details</h4>
          <p>Delivery Order ID: {order.id}</p>
          {order?.order_items && order?.order_items?.length > 0 ? (
            <div className="space-y-2">
              {order.order_items.map((item, index) => (
                <OrderItem
                  key={index}
                  title={item?.product?.name}
                  quantity={item?.quantity}
                  price={item?.price}
                />
              ))}
            </div>
          ) : (
            <p>No items found for this order.</p>
          )}
          <DeliveryActions 
            orderId={order.id} 
            deliveryStatus={deliveryStatus}
            onUpdateStatus={onUpdateStatus}
          />
        </Card>
      ))}
    </div>
  );
};

const DeliveryActions = ({ orderId, deliveryStatus, onUpdateStatus }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
          <button 
            className="btn btn-sm w-full sm:w-auto btn-primary"
            onClick={() => onUpdateStatus(orderId, 'delivered')}
          >
            <HiOutlineCheck className="mr-2" />
            Mark as Delivered
          </button>
          <button 
            className="btn btn-sm w-full sm:w-auto btn-error"
            onClick={() => onUpdateStatus(orderId, 'cancelled')}
          >
            Cancel Delivery
          </button>
          <button 
          className="btn btn-sm w-full sm:w-auto btn-success"
          onClick={() => onUpdateStatus(orderId, 'completed')}
        >
          <HiOutlineCheck className="mr-2" />
          Mark as Completed
        </button>
    </div>
  );
};

// Stub for useUpdateDeliveryStatus hook
const useUpdateDeliveryStatus = () => {
  const updateDeliveryStatus = async (orderId: string, newStatus: string) => {
    console.log(`Updating order ${orderId} to status ${newStatus}`);
    // Implement actual update logic here when the hook is ready
  };

  return { updateDeliveryStatus };
};

export default function DeliveryPage() {
  const router = useRouter();
  const { deliveryId } = router.query;
  const {
    data: delivery,
    error,
    loading,
  } = useFetchDeliveryByPK(deliveryId as string);
  const { updateDeliveryStatus } = useUpdateDeliveryStatus();

  if (error) return <p>Error loading delivery information</p>;
  if (loading) return <p>Loading delivery information...</p>;
  if (!delivery) return <p>No delivery found</p>;

  const deliveryInfoItems = [
    {
      icon: <HiOutlineBanknotes />,
      label: "Payment Method",
      value:  "N/A",
    },
    {
      icon: <HiOutlineBriefcase />,
      label: "Client",
      value:  "N/A",
    },
    {
      icon: <HiOutlineTruck />,
      label: "Status",
      value:  "N/A",
    },
  ];

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      await updateDeliveryStatus(orderId, newStatus);
      // Optionally, you can refetch the delivery data here to update the UI
    } catch (error) {
      console.error("Failed to update delivery status:", error);
    }
  };

  console.log(delivery[0]?.order);

  return (
    <section className="space-y-4">
      <Card title={`Delivery ID: ${delivery.id}`}>
        <div className="space-y-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {deliveryInfoItems.map((item, index) => (
              <OrderInfoItem
                key={index}
                icon={item.icon}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="btn btn-sm w-full sm:w-auto btn-primary">
              <HiOutlineMap className="mr-2" />
              Follow Recommended Route
            </button>
            <button className="btn btn-sm w-full sm:w-auto">
              <HiOutlineMapPin className="mr-2" />
              Navigate Independently
            </button>
          </div>
          {/* {

          delivery.status === 'pending' && (
            <button 
              className="btn btn-sm w-full sm:w-auto btn-secondary"
              onClick={() => handleUpdateStatus(delivery.id, 'en_route')}
            >
              Start Trip
            </button>
          )} */}
        </div>
      </Card>
      <DeliveryOrders 
        order={delivery[0]?.order} 
        deliveryStatus={"en_route"}
        onUpdateStatus={handleUpdateStatus}
      />
    </section>
  );
}
