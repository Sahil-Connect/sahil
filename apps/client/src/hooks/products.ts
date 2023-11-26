import { useMutation, useQuery } from '@apollo/client';
import { FETCH_PRODUCTS } from '@/lib/graphql/queries/products';

export const useFetchProducts = ({
  offset = 0,
  limit = 12,
}: {
  offset: number;
  limit?: number;
}) => {
  const { error, data, loading } = useQuery(FETCH_PRODUCTS, {
    variables: {
      offset,
      limit,
    },
  });
  return {
    error,
    data: data?.products,
    loading,
    productsCount: data?.products_aggregate?.aggregate.count,
  };
};
