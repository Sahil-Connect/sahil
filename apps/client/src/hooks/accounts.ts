import { useQuery } from '@apollo/client';
import { GET_ACCOUNT_BALANCE } from '@/lib/graphql/queries/accounts';

export const useGetAccountBalance = () => {
  const { error, data, loading, refetch } = useQuery(GET_ACCOUNT_BALANCE, {});
  return { error, data: data?.accountBalance, loading, refetch };
};

// export const useGetMomoAccountInfo = () => {
//   const { error, data, loading, refetch } = useQuery()
// }
