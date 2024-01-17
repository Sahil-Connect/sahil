import { useMutation, useQuery, useSubscription } from "@apollo/client";
import {
  FETCH_ORDERS,
  FETCH_ORDER_BY_PK,
  INSERT_NEW_ORDER,
  FETCH_ORDER_DELIVERIES,
  FETCH_ORDERS_STATS,
  INIT_ORDER_ACTION,
  GET_ORDER_VALIDATION,
} from "@sahil/lib/graphql";
import {
  InsertBusinessOrderMutation,
  InsertBusinessOrderMutationVariables,
} from "@sahil/lib/graphql/__generated__/graphql";

export const useFetchOrders = () => {
  const { error, data, loading } = useQuery(FETCH_ORDERS);
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

export const usePlaceBusinessOrder = () => {
  const [placeOrder, { data, loading, error }] = useMutation<
    InsertBusinessOrderMutation,
    InsertBusinessOrderMutationVariables
  >(INSERT_NEW_ORDER);

  return { data, loading, placeOrder, error };
};

export const useFetchOrderDeliveriesByPK = (id: string) => {
  const { error, data, loading } = useQuery(FETCH_ORDER_DELIVERIES, {
    variables: {
      orderId: id,
    },
  });
  return { error, data: data?.delivery, loading };
};

export const useGetOrdersStats = () => {
  const { data, loading, error } = useQuery(FETCH_ORDERS_STATS);

  return { error, ordersCount: data?.orders_aggregate?.aggregate, loading };
};

export const useInitBusinessOrder = () => {
  const [initOrder, { data, loading, error }] = useMutation(INIT_ORDER_ACTION);

  return { data, loading, error, initOrder };
};

export const useOrderValidSubscription = (actionId: string) => {
  const { data, loading, error } = useSubscription(GET_ORDER_VALIDATION, {
    variables: {
      id: actionId,
    },
    skip: !actionId,
  });

  return { data, loading, error };
};
