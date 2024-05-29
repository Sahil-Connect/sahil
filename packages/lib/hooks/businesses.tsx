import { useMutation, useQuery, useSubscription } from "@apollo/client";

import {
  FETCH_BUSINESSES,
  FETCH_BUSINESS_BY_PK,
  FETCH_BUSINESS_ORDERS,
  FETCH_BUSINESS_TYPES,
  INSERT_NEW_BUSINESS,
  ONBOARD_NEW_BUSINESS,
  REGISTER_BUSINESS_ACTION,
} from "@sahil/lib/graphql";

import { BUSINESS_VALIDATED } from "@sahil/lib/graphql/subscriptions/businesses";

// graphql types
import {
  GetBusinessesQuery,
  GetBusinessesQueryVariables,
  GetBusinessesDocument,
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
  const { error, data, loading } = useQuery<
    GetBusinessesQuery,
    GetBusinessesQueryVariables
  >(FETCH_BUSINESSES);
  return {
    error,
    data: data?.business,
    loading,
    businessCount: data?.business_aggregate?.aggregate,
  };
};

export const useRegisterBusiness = () => {
  const [registerBusinessAction, { data, loading, error }] = useMutation(
    REGISTER_BUSINESS_ACTION
  );
  return {
    data: data?.registerBusinessAction,
    loading,
    registerBusinessAction,
    error,
  };
};

export const useRegisterBusinessSubscription = (id: string) => {
  const { data, loading } = useSubscription(BUSINESS_VALIDATED, {
    variables: { id },
  });
  return { data: data?.registerBusinessAction, loading };
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

export const useFetchBusinessTypes = () => {
  const { error, data, loading } = useQuery(FETCH_BUSINESS_TYPES);
  return { error, loading, data: data?.business_type };
};

export const useOnboardBusiness = () => {
  const [onboardBusiness, { data, loading, error }] =
    useMutation(ONBOARD_NEW_BUSINESS);
  return { onboardBusiness, data, loading, error };
};
