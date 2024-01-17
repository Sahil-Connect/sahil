import { useMutation, useQuery } from "@apollo/client";
import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_NAME } from "@sahil/lib/graphql";
import { GetProductsQuery } from "@sahil/lib/graphql/__generated__/graphql";
import { useRouter } from "next/router";

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

  const { error, data, loading } = useQuery<GetProductsQuery>(graphqlQuery, {
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
    productsCount: data?.products_aggregate?.aggregate?.count,
  };
};
