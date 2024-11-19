import { useMutation, useQuery, useSubscription } from "@apollo/client";

import {
  FETCH_BUSINESSES,
  FETCH_BUSINESS_BY_PK,
  FETCH_BUSINESS_ORDERS,
  INSERT_NEW_BUSINESS,
} from "@sahil/lib/graphql";

// graphql types
import {
  GetBusinessByPkQuery,
  GetBusinessByPkQueryVariables,
  GetBusinessOrdersQuery,
  GetBusinessOrdersQueryVariables,
} from "@sahil/lib/graphql/__generated__/graphql";

export const useFetchBusinessByPK = (id: string) => {
  const { error, data, loading } = useQuery<
    GetBusinessByPkQuery,
    GetBusinessByPkQueryVariables
  >(FETCH_BUSINESS_BY_PK, {
    variables: {
      id,
    },
  });
  return { error, data: data?.business_by_pk, loading };
};

export const useFetchBusinesses = () => {
  const { error, data, loading } = useQuery(FETCH_BUSINESSES);
  return {
    error,
    data: data?.business,
    loading,
    businessCount: data?.business_aggregate?.aggregate,
  };
};

export const useFetchBusinessOrders = ({
  customerId,
  limit = 4,
  offset,
}: {
  customerId: string;
  limit?: number;
  offset: number;
}) => {
  const { error, data, loading } = useQuery<
    GetBusinessOrdersQuery,
    GetBusinessOrdersQueryVariables
  >(FETCH_BUSINESS_ORDERS, {
    variables: {
      customerId,
      limit,
      offset,
    },
  });
  return {
    error,
    data: data?.orders,
    loading,
    ordersCount: data?.orders_aggregate?.aggregate,
  };
};
