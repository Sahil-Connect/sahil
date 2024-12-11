import { Card } from "ui";
import { OrderItem } from "@sahil/features/Orders/OrderItems";

export const DeliveryOrders = ({ order, deliveryStatus, onUpdateStatus }) => {
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
   
          </Card>
        ))}
      </div>
    );
  };
  