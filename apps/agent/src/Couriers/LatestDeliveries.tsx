import { useFetchLatestDeliveries } from "@/hooks/couriers";
import { DeliveryOverviewCard } from "./DeliveryOverviewCard";

export const LatestDeliveries = ({ courierId }) => {
    const { data: deliveries, error, loading } = useFetchLatestDeliveries(courierId);
    if(error) {
        return (
            <p>Failed to load deliveries</p>
        )
    }

    if(loading) {
        return (
            <p>Loading deliveries</p>
        )
    }
    return (
        <div className="flex flex-wrap gap-2">
            {
                deliveries.map(delivery => <DeliveryOverviewCard key={delivery.id} delivery={delivery }/>)
            }
        </div>
    )
}