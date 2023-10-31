import { useQuery } from "@apollo/client";
import { FETCH_COURIERS } from "@/lib/graphql/queries/couriers";

export const useFetchCouriers = () => {
    const { error, data, loading } = useQuery(FETCH_COURIERS);
    return { error, data: data?.couriers, loading };
}

export const useFetchLatestDeliveries = (courierId: string) => {
    const { error, data, loading } = useQuery(FETCH_COURIERS);
    return { error, data: data?.couriers, loading };
}