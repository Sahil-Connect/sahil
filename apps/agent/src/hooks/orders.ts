import { useMutation, useQuery } from "@apollo/client";
import { FETCH_ORDERS } from "@/lib/graphql/queries/orders";
import { INSERT_NEW_ORDER } from "@/lib/graphql/mutations/orders";

export const useFetchOrders = () => {
    const { error, data, loading } = useQuery(FETCH_ORDERS);
    return { error, data: data?.orders, loading, ordersCount: data?.orders_aggregate?.aggregate };
}

export const usePlaceBusinessOrder = () => {
    const [insertBusinessOrder, { data, loading, error }] = useMutation(INSERT_NEW_ORDER);

    return {loading, insertBusinessOrder, error};
}