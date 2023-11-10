import { useMutation, useQuery } from "@apollo/client";
import { FETCH_ORDERS, FETCH_ORDER_BY_PK  } from "@/lib/graphql/queries/orders";
import { INSERT_NEW_ORDER } from "@/lib/graphql/mutations/orders";

export const useFetchOrders = () => {
    const { error, data, loading } = useQuery(FETCH_ORDERS);
    return { error, data: data?.orders, loading, ordersCount: data?.orders_aggregate?.aggregate };
}


export const useFetchOrderByPK = (id: string) => {
    const { error, data, loading } = useQuery(FETCH_ORDER_BY_PK , {
        variables: {
            id
        },
    });
    return { error, data: data?.orders_by_pk, loading };
}

export const usePlaceBusinessOrder = () => {
    const [placeOrder, { data, loading, error }] = useMutation(INSERT_NEW_ORDER);

    return {loading, placeOrder, error};
}