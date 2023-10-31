import { useFetchCouriers } from "@/hooks/couriers";
import { CourierOveriewCard } from "./CourierOverviewCard";

export const ListCouriers = () => {
    const { data: couriers, error, loading } = useFetchCouriers();
    if(error) {
        return (
            <p>Failed to load couriers</p>
        )
    }

    if(loading) {
        return (<p>Loading</p>)
    }
    return (
        <div className="flex flex-wrap gap-2">
            {
                couriers.map(courier =><CourierOveriewCard  key={courier.id} courier={courier}/>)
            }
        </div>
    )
}