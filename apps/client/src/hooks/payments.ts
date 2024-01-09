import { useMutation, useQuery } from '@apollo/client';
import {
  GET_PAYMENT_STATUS,
  GET_PREAPPROVAL_STATUS,
  REQUEST_TO_PAY_STATUS,
} from '@sahil/lib/graphql';

export const useGetPaymentStatus = () => {
  const { error, data, loading } = useQuery(GET_PAYMENT_STATUS);
  return { error, data: data, loading };
};

export const useGetPreApprovalStatus = () => {
  const { error, data, loading } = useQuery(GET_PREAPPROVAL_STATUS);
  return { error, data: data, loading };
};

export const useGetRequesTtoPayStatus = () => {
  const { error, data, loading } = useQuery(REQUEST_TO_PAY_STATUS);
  return { error, data: data, loading };
};
