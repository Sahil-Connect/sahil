import { useMutation, useQuery } from "@apollo/client";
import { FETCH_PRODUCTS } from "@sahil/lib/graphql";

// graphql types
import {
  GetProductsQuery,
  GetProductsQueryVariables,
  GetSupplierProductsQuery,
  GetSupplierProductsQueryVariables
} from "@sahil/lib/graphql/__generated__/graphql";

export const useFetchProducts = ({
  limit = 12,
  offset = 0,
  supplierId
}: {
  limit?: number;
  offset: number;
  supplierId?: string;
}) => {
  const { error, data, loading } = useQuery(FETCH_PRODUCTS, {
    variables: {
      limit,
      offset,
      where: supplierId ? { supplier_id: { _eq: supplierId } } : {},
    },
    skip: !supplierId
  });

  return {
    error,
    data: data?.products,
    loading,
    productsCount: data?.products_aggregate?.aggregate,
  };
};

export const useFetchSupplierProducts = ({
  supplierId,
  limit = 10,
  offset = 0,
}: {
  supplierId: string;
  limit?: number;
  offset: number;
}) => {
  const { error, data, loading } = useQuery(
    FETCH_SUPPLIER_PRODUCTS,
    {
      variables: {
        supplier_id: supplierId,
        limit,
        offset,
      },
    }
  );
  return {
    error,
    data: data?.products,
    loading,
    productsCount: data?.products_aggregate?.aggregate,
  };
};
