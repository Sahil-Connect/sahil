import { useMutation, useQuery } from "@apollo/client";
import { FETCH_ORDERS } from "@/lib/graphql/queries/orders";

export const useFetchOrders = () => {
    const { error, data, loading } = useQuery(FETCH_ORDERS);
    return { error, data: data, loading };
}