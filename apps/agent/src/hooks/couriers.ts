import { useQuery } from "@apollo/client";
import { FETCH_COURIERS, FETCH_COURIER_BY_PK } from "@/lib/graphql/queries/couriers";

export const useFetchCouriers = () => {
    const { error, data, loading } = useQuery(FETCH_COURIERS);
    return { error, data: data?.couriers, loading };
}

export const useFetchCourierByPK = (id: string) => {
    const { error, data, loading } = useQuery(FETCH_COURIER_BY_PK, {
        variables: {
            id
        }
    });
    return { error, data: data?.couriers_by_pk, loading };
}

export const useFetchLatestDeliveries = (courierId: string) => {
    const { error, data, loading } = useQuery(FETCH_COURIERS);
    return { error, data: data?.couriers, loading };
}