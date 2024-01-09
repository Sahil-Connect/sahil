import { useQuery } from '@apollo/client';
import { GET_ACCOUNT_BALANCE, GET_MOMO_ACCOUNT_INFO } from '@sahil/lib/graphql';

export const useGetAccountBalance = () => {
  const { error, data, loading, refetch } = useQuery(GET_ACCOUNT_BALANCE);
  return { error, data: data?.accountBalance, loading, refetch };
};

export const useGetMomoAccountInfo = () => {
  const { error, data, loading, refetch } = useQuery(GET_MOMO_ACCOUNT_INFO);
  return { error, data: data?.basicUserInfo, loading, refetch };
};
