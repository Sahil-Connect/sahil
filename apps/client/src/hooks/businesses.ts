import { useMutation, useQuery, useSubscription } from "@apollo/client";
import {
  FETCH_BUSINESSES,
  FETCH_BUSINESS_BY_PK,
  INSERT_NEW_BUSINESS,
  FETCH_BUSINESS_ORDERS,
} from "@sahil/lib/graphql";

// import { BUSINESS_VALIDATED } from "@sahil/lib/graphql/subscriptions/businesses";

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

export const useRegisterBusiness = () => {
  const [insertClient, { data, loading, error }] =
    useMutation(INSERT_NEW_BUSINESS);

  return { loading, insertClient, error };
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

// export const useBusinessValidated = (actionId: string) => {
//   const { data, loading, error } = useSubscription(BUSINESS_VALIDATED, {
//     variables: {
//       id: actionId,
//     },
//     skip: !actionId,
//   });
//   return { data, error, loading };
// };
