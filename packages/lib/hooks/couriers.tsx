import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_COURIERS,
  FETCH_COURIER_BY_PK,
  INSERT_NEW_COURIER,
} from "@sahil/lib/graphql";

// graphql types
import {
  GetCouriersQuery,
  GetCouriersQueryVariables,
  GetCouriersByPkQuery,
  GetCouriersByPkQueryVariables,
} from "@sahil/lib/graphql/__generated__/graphql";

export const useFetchCouriers = () => {
  const { error, data, loading } = useQuery<
    GetCouriersQuery,
    GetCouriersQueryVariables
  >(FETCH_COURIERS);
  return {
    error,
    data: data?.couriers,
    loading,
    couriersCount: data?.couriers_aggregate?.aggregate,
  };
};

export const useFetchCourierByPK = (id: string) => {
  const { error, data, loading } = useQuery<GetCouriersByPkQuery, GetCouriersByPkQueryVariables>(FETCH_COURIER_BY_PK, {
    variables: {
      id,
    },
  });
  console.log("data", data);
  return { error, data: data?.couriers_by_pk, loading };
};

export const useFetchLatestDeliveries = (courierId: string) => {
  const { error, data, loading } = useQuery<
    GetCouriersQuery,
    GetCouriersQueryVariables
  >(FETCH_COURIERS);
  return { error, data: data?.couriers, loading };
};

export const useRegisterCourier = () => {
  const [insertCourier, { data, loading, error }] =
    useMutation(INSERT_NEW_COURIER);
  return {
    courier: data?.insert_couriers_one,
    loading,
    insertCourier,
    error,
  };
};
