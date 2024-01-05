import { useMutation, useQuery } from '@apollo/client';
import {
  FETCH_COURIERS,
  FETCH_COURIER_BY_PK,
  INSERT_NEW_COURIER,
} from '@sahil/lib/graphql';

export const useFetchCouriers = () => {
  const { error, data, loading } = useQuery(FETCH_COURIERS);
  return {
    error,
    data: data?.couriers,
    loading,
    couriersCount: data?.couriers_aggregate?.aggregate,
  };
};

export const useFetchCourierByPK = (id: string) => {
  const { error, data, loading } = useQuery(FETCH_COURIER_BY_PK, {
    variables: {
      id,
    },
  });
  return { error, data: data?.couriers_by_pk, loading };
};

export const useFetchLatestDeliveries = (courierId: string) => {
  const { error, data, loading } = useQuery(FETCH_COURIERS);
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
