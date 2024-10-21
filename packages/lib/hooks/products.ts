import { useMutation, useQuery } from "@apollo/client";
import { FETCH_PRODUCTS } from "@sahil/lib/graphql";

// graphql types
import {
  GetProductsQuery,
  GetProductsQueryVariables,
} from "@sahil/lib/graphql/__generated__/graphql";

export const useFetchProducts = ({
  limit = 10,
  offset = 0,
}: {
  limit?: number;
  offset: number;
}) => {
  const { error, data, loading } = useQuery<GetProductsQuery, GetProductsQueryVariables>(FETCH_PRODUCTS, {
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