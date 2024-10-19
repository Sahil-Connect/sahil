import { useRouter } from "next/router";
import { useFetchDeliveryRequestByPK } from "@sahil/lib/hooks/deliveries";
import { Card } from "ui";
import { OrderItem } from "@sahil/features/Orders/OrderItems";
import { OrderInfoItem } from "@sahil/features/Orders/OrderDetails";
import { formatDateTime } from "@sahil/lib/dates";
import {
  HiCalendarDays,
  HiOutlineBanknotes,
  HiOutlineBriefcase,
} from "react-icons/hi2";

const RequestOrders = ({ orders, isSingleOrder }) => {
  return (
    <div>
      <div className="space-y-4">
        {orders.map((order) => {
          return (
            <Card key={order.id} className="space-y-4">
              <h4 className="text-sm font-semibold">Order Details</h4>
              <p>Delivery Request Order ID: {order.id}</p>
              {order?.order?.order_items &&
              order?.order?.order_items?.length > 0 ? (
                <div className="space-y-2">
                  {order?.order?.order_items.map((item, index) => (
                    <OrderItem
                      key={index}
                      title={item?.product?.name}
                      quantity={item?.product?.quantity}
                      price={item?.product?.price}
                    />
                  ))}
                </div>
              ) : (
                <p>No items found for this order.</p>
              )}
              {!isSingleOrder && (
                <RequestActions />
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export const RequestActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <button className="btn btn-sm w-full sm:w-auto btn-primary">Accept</button>
      <button className="btn btn-sm w-full sm:w-auto">Decline</button>
    </div>
  );
};

export default function RequestPage() {
  const router = useRouter();
  const { requestId } = router.query;
  const {
    data: deliveryRequest,
    error,
    loading,
  } = useFetchDeliveryRequestByPK(requestId as string);
  if (error) return <p>error</p>;
  if (loading) return <p>loading</p>;
  if (!deliveryRequest) return <p>No delivery request found</p>;

  const orderInfoItems = [
    {
      icon: <HiCalendarDays />,
      label: "Order Date",
      value: formatDateTime(deliveryRequest?.created_at),
    },
    {
      icon: <HiOutlineBanknotes />,
      label: "Payment Method",
      value: "Cash on Delivery",
    },
  ];

  const isSingleOrder = deliveryRequest.delivery_request_orders.length === 1;

  return (
    <section className="space-y-4">
      <Card title={`Request ID: ${deliveryRequest.id}`}>
        <div className="space-y-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {orderInfoItems.map((item, index) => (
              <OrderInfoItem
                key={index}
                icon={item.icon}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
          {isSingleOrder && (
            <RequestActions />
          )}
        </div>
      </Card>
      <RequestOrders 
        orders={deliveryRequest.delivery_request_orders} 
        isSingleOrder={isSingleOrder}
      />
    </section>
  );
}
