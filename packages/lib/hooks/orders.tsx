import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_ORDERS,
  FETCH_ORDER_BY_PK,
  FETCH_ORDER_DELIVERIES,
  FETCH_ORDERS_STATS,
  INSERT_NEW_ORDER,
  APPEND_ORDER_STATUS,
} from "@sahil/lib/graphql";

// graphql types
import {
  GetOrdersQuery,
  GetOrdersQueryVariables,
  GetOrderByPkQuery, 
  GetOrderByPkQueryVariables,
  GetOrderDeliveriesQuery,
  GetOrderDeliveriesQueryVariables,
  GetOrdersStatsQuery,
  GetOrdersStatsQueryVariables,
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
  const { error, data, loading } = useQuery<GetOrderByPkQuery, GetOrderByPkQueryVariables>(FETCH_ORDER_BY_PK, {
    variables: {
      id,
    },
  });
  return { error, data: data?.orders_by_pk, loading };
};

export const useFetchOrderDeliveriesByPK = (id: string) => {
  const { error, data, loading } = useQuery<GetOrderDeliveriesQuery, GetOrderDeliveriesQueryVariables>(FETCH_ORDER_DELIVERIES, {
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
  const { data, loading, error } = useQuery<GetOrdersStatsQuery, GetOrdersStatsQueryVariables>(FETCH_ORDERS_STATS);

  return { error, ordersCount: data?.orders_aggregate?.aggregate, loading };
};

export const useAppendOrderStatus = () => {
  const [appendOrderStatus, { data, loading, error }] =
    useMutation(APPEND_ORDER_STATUS);

  return { loading, data, error, appendOrderStatus };
};