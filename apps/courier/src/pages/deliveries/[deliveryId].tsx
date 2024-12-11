import { useRouter } from "next/router";
import { useFetchDeliveryByPK } from "@sahil/lib/hooks/deliveries";
import { DeliveryDetails } from "@sahil/features/Deliveries/DeliveryDetails";

const useUpdateDeliveryStatus = () => {
  const updateDeliveryStatus = async (orderId: string, newStatus: string) => {
    console.log(`Updating order ${orderId} to status ${newStatus}`);
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

  const handleUpdateStatus = async (orderId: string, newStatus: string) => {
    try {
      await updateDeliveryStatus(orderId, newStatus);
      // Optionally, you can refetch the delivery data here to update the UI
    } catch (error) {
      console.error("Failed to update delivery status:", error);
    }
  };

  // Dummy data for demonstration
  const dummyDeliveryData = {
    id: delivery[0]?.id || "D123",
    status: "pending" as const, // Type assertion to fix status type
    client: {
      name: "John Doe",
      address: "123 Main St, City, Country",
      phone: "+1 234 567 890"
    },
    items: [
      { name: "Product 1", quantity: 2, price: 29.99 },
      { name: "Product 2", quantity: 1, price: 49.99 }
    ],
    payment: {
      method: "Credit Card",
      total: 109.97,
      commission: 10.99
    },
    timing: {
      startTime: "2024-03-15 14:30",
      duration: "45 mins"
    },
    distance: "3.2 km"
  };

  return (
    <section className="p-4 space-y-4">
      <DeliveryDetails {...dummyDeliveryData} />
      {dummyDeliveryData.status === 'pending' && (
        <div className="flex justify-between">
          <button 
            className="btn btn-primary grow"
            onClick={() => handleUpdateStatus(delivery[0].id, 'en_route')}
          >
            Start Delivery
          </button>
          <button 
            className="btn btn-ghost grow"
            onClick={() => handleUpdateStatus(delivery[0].id, 'en_route')}
          >
            Cancel Delivery
          </button>
        </div>
      )}
    </section>
  );
}
