import { useMutation, useQuery } from '@apollo/client';
import { FETCH_PRODUCTS } from '@/lib/graphql/queries/products';

export const useFetchProducts = ({
  limit = 12,
  offset = 0,
}: {
  limit?: number;
  offset: number;
}) => {
  const { error, data, loading } = useQuery(FETCH_PRODUCTS, {
    variables: {
      limit,
      offset,
    },
  });
  return {
    error,
    data: data?.products,
    loading,
    productsCount: data?.products_aggregate?.aggregate,
  };
};
