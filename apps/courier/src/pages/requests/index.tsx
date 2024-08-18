import { ListDeliveryRequests } from "@sahil/features/Deliveries/ListDeliveryRequests";

export default function Requests() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Requests Page!</h3>
      <ListDeliveryRequests />
    </main>
  );
}
