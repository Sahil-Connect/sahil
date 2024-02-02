import { Card } from "ui";
import { DeliveryRequestOverview } from "./DeliveryRequestOverview";

const requests = [
  {
    id: 1,
    name: "BBQ Pizza",
  },
  {
    id: 2,
    name: "Injera and Tibs",
  },
  {
    id: 3,
    name: "Buffalo Wings",
  },
];

export const ListDeliveryRequests = () => {
  return (
    <div className="space-y-2">
      {requests.map((request) => (
        <DeliveryRequestOverview request={request} />
      ))}
    </div>
  );
};
