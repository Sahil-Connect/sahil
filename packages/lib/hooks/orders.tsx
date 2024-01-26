import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_ORDERS,
  FETCH_ORDER_BY_PK,
  FETCH_ORDER_DELIVERIES,
  FETCH_ORDERS_STATS,
  INSERT_NEW_ORDER,
} from "@sahil/lib/graphql";

// graphql types
import {
  GetOrdersQuery,
  GetOrdersQueryVariables,
} from "@sahil/lib/graphql/__generated__/graphql";

export const useFetchOrders = () => {
  const { error, data, loading } = useQuery<
    GetOrdersQuery,
    GetOrdersQueryVariables
  >(FETCH_ORDERS);
  return {
    error,
    data: data?.orders,
    loading,
    ordersCount: data?.orders_aggregate?.aggregate,
  };
};

export const useFetchOrderByPK = (id: string) => {
  const { error, data, loading } = useQuery(FETCH_ORDER_BY_PK, {
    variables: {
      id,
    },
  });
  return { error, data: data?.orders_by_pk, loading };
};

export const useFetchOrderDeliveriesByPK = (id) => {
  const { error, data, loading } = useQuery(FETCH_ORDER_DELIVERIES, {
    variables: {
      orderId: id,
    },
  });
  return { error, data: data?.delivery, loading };
};

export const usePlaceBusinessOrder = () => {
  const [placeOrder, { data, loading, error }] = useMutation(INSERT_NEW_ORDER);

  return { loading, placeOrder, error };
};

export const useGetOrdersStats = () => {
  const { data, loading, error } = useQuery(FETCH_ORDERS_STATS);

  return { error, ordersCount: data?.orders_aggregate?.aggregate, loading };
};
