import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_DELIVERIES,
  FETCH_DELIVERY_BY_PK,
  FETCH_DELIVERIES_BY_COURIER,
  FETCH_DELIVERY_REQUESTS,
  FETCH_DELIVERY_REQUEST_BY_COURIER,
  FETCH_DELIVERY_REQUEST_BY_PK,
} from "../graphql/queries/deliveries";

export const useFetchDeliveries = () => {
  const { loading, error, data } = useQuery(FETCH_DELIVERIES);
  return { loading, error, data:data?.delivery };
};

export const useFetchDeliveryByPK = (id: string) => {
  const { loading, error, data } = useQuery(FETCH_DELIVERY_BY_PK, {
    variables: { id },
  });
  return { loading, error, data: data?.delivery };
};

export const useFetchDeliveriesByCourier = (courier_id: string) => {
  const { loading, error, data } = useQuery(FETCH_DELIVERIES_BY_COURIER, {
    variables: { courier_id },
  });
  return { loading, error, data: data?.delivery };
};

export const useFetchDeliveryRequests = () => {
  const { loading, error, data } = useQuery(FETCH_DELIVERY_REQUESTS);
  return { loading, error, data: data?.delivery_request };
};

export const useFetchDeliveryRequestByPK = (id: string) => {
  const { loading, error, data } = useQuery(FETCH_DELIVERY_REQUEST_BY_PK, {
    variables: { id },
  });
  return { loading, error, data: data?.delivery_request[0] };
};

export const useFetchDeliveryRequestByCourier = (courier_id: string) => {
  const { loading, error, data } = useQuery(FETCH_DELIVERY_REQUEST_BY_COURIER, {
    variables: { courier_id },
  });
  return { loading, error, data: data?.delivery_request[0] };
};
