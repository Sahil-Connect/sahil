import { useMutation, useQuery } from "@apollo/client";
import { FETCH_PRODUCTS } from "@sahil/lib/graphql";

export const useFetchProducts = ({
  limit = 10,
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
