import { useMutation, useQuery } from '@apollo/client';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_NAME,
} from '@/lib/graphql/queries/products';
import { useRouter } from 'next/router';

export const useFetchProducts = ({
  offset = 0,
  limit = 12,
}: {
  offset: number;
  limit?: number;
}) => {
  const router = useRouter();
  const { name } = router.query;

  const graphqlQuery = name ? FETCH_PRODUCTS_BY_NAME : FETCH_PRODUCTS;

  const { error, data, loading } = useQuery(graphqlQuery, {
    variables: {
      offset,
      limit,
      name: `%${name}%`,
    },
  });
  return {
    error,
    data: data?.products,
    loading,
    productsCount: data?.products_aggregate?.aggregate.count,
  };
};
