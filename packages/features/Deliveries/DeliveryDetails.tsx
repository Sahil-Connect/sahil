import { Avatar, Card } from "ui";
import {
  HiOutlineClock,
  HiOutlineCreditCard,
  HiOutlineSquares2X2,
  HiOutlineUser,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineMapPin
} from 'react-icons/hi2'

interface DeliveryItem {
  name: string;
  quantity: number;
  price: number;
}

interface DeliveryDetailsProps {
  id: string;
  status: "pending" | "in_progress" | "completed" | "cancelled";
  client: {
    name: string;
    address: string;
    phone: string;
  };
  items: DeliveryItem[];
  payment: {
    method: string;
    total: number;
    commission: number;
  };
  timing: {
    startTime: string;
    endTime?: string;
    duration?: string;
  };
  distance: string;
}

export function DeliveryDetails({
  id,
  status,
  client,
  items,
  payment,
  timing,
  distance,
}: DeliveryDetailsProps) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container max-w-2xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Delivery Details</h1>
        <div className={`badge py-2 ${
          status === "completed" ? "badge-success" : 
          status === "cancelled" ? "badge-error" : 
          "badge-primary"
        }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
      <div className="flex gap-2 items-center bg-background/30 backdrop-blur supports-[backdrop-filter]:bg-background/20 rounded-2xl shadow-lg transition-all duration-200">
                <Avatar src={client?.avatar} alt={client.name} className="ring-2 ring-accent" />
               <div className="py-2">
               <h3 className="font-medium text-lg">{client.name}</h3>
                </div>
              </div>

      <Card>
        <div className="space-y-6">
          {/* Client Information */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <HiOutlineUser className="h-4 w-4" />
              <span className="font-medium">Client Information</span>
            </div>
            <div className="space-y-2 pl-6">
            <p className="text-sm text-gray-600 flex items-center gap-2">
                <HiOutlineMapPin className="h-4 w-4" />
                {client.address}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <HiOutlineMapPin className="h-4 w-4" />
                {client.phone}
              </p>
            </div>
          </div>

          <div className="divider"></div>

          {/* Timing Information */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <HiOutlineClock className="h-4 w-4" />
              <span className="font-medium">Timing</span>
            </div>
            <div className="pl-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Start Time</p>
                <p className="font-medium">{timing.startTime}</p>
              </div>
              {timing.endTime && (
                <div>
                  <p className="text-sm text-gray-600">End Time</p>
                  <p className="font-medium">{timing.endTime}</p>
                </div>
              )}
              {timing.duration && (
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <div className="flex items-center gap-2">
                    <HiOutlineClock className="h-4 w-4" />
                    <p className="font-medium">{timing.duration}</p>
                  </div>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600">Distance</p>
                <div className="flex items-center gap-2">
                  <HiOutlineTruck className="h-4 w-4" />
                  <p className="font-medium">{distance}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* Order Items */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <HiOutlineSquares2X2 className="h-4 w-4" />
              <span className="font-medium">Order Items ({totalItems})</span>
            </div>
            <div className="pl-6 space-y-2">
              {items.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="space-y-2">
          <div className="flex items-center justify-between w-full gap-2">
          <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
            </div>
            <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
              
                </div>
              ))}
            </div>
          </div>

          <div className="divider"></div>

          {/* Financial Information */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <HiOutlineCurrencyDollar className="h-4 w-4" />
              <span className="font-medium">Financial Details</span>
            </div>
            <div className="pl-6 space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Payment Method</p>
                <div className="flex items-center gap-2">
                  <HiOutlineCreditCard className="h-4 w-4" />
                  <p className="font-medium">{payment.method}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Commission</p>
                <p className="font-medium">${payment.commission.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Total Amount</p>
                <p className="font-medium text-lg">${payment.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
} 