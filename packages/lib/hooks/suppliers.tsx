import { useMemo } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_FILTERED_SUPPLIERS,
  FETCH_SUPPLIERS,
  FETCH_SUPPLIER_BY_PK,
  FETCH_SUPPLIER_PRODUCT_BY_NAME,
  FETCH_SUPPLIER_PRODUCTS,
  INSERT_NEW_SUPPLIER,
  UPDATE_PRODUCT_BY_PK,
  DELETE_PRODUCT_BY_PK,
  ADD_NEW_PRODUCT,
  FETCH_SUPPLIER_ORDERS,
  FETCH_SUPPLIER_CATEGORIES,
  ONBOARD_NEW_SUPPLIER,
} from "@sahil/lib/graphql";

// graphql types
import {
  GetSuppliersQuery,
  GetSuppliersQueryVariables,
} from "@sahil/lib/graphql/__generated__/graphql";

export const useFetchSuppliers = (category?: string) => {
  const graphqlQuery = FETCH_SUPPLIERS;
  const { error, data, loading } = useQuery<
    GetSuppliersQuery,
    GetSuppliersQueryVariables
  >(graphqlQuery);

  return {
    error,
    data: data?.suppliers,
    loading,
    suppliersCount: data?.suppliers_aggregate?.aggregate,
  };
};

export const useFetchSupplierByPK = (id?: string) => {
  const router = useRouter();
  const { supplierId } = router.query;
  const { error, data, loading } = useQuery(FETCH_SUPPLIER_BY_PK, {
    variables: {
      id: id || supplierId,
    },
  });
  return { error, data: data?.suppliers_by_pk, loading };
};

export const useFetchSupplierProducts = ({
  page = 0,
  id,
  sortOption,
}: {
  page: number;
  id?: string;
  sortOption?: { property: string; order: string };
}) => {
  const router = useRouter();
  const { supplierId } = router.query;
  const { product } = router.query;

  const graphqlQuery = product
    ? FETCH_SUPPLIER_PRODUCT_BY_NAME
    : FETCH_SUPPLIER_PRODUCTS;

  let variables: any = {
    id: id || supplierId,
    offset: page * 4,
    name: `%${product}%`,
  };

  if (sortOption) {
    // Add 'order_by' to variables only if 'sortOption' is provided.
    // This ensures the GraphQL query uses its default sorting behavior when 'sortOption' is not specified.
    variables.order_by = { [sortOption.property]: sortOption.order };
  }

  const { error, data, loading } = useQuery(graphqlQuery, {
    variables,
  });

  // Memoize the result based on the page and ids
  return useMemo(() => {
    return { error, data: data?.products, loading };
  }, [page, id, product, supplierId, error, data, loading]);
};

export const useRegisterSupplier = () => {
  const [insertSupplier, { data, loading, error }] =
    useMutation(INSERT_NEW_SUPPLIER);
  return {
    supplier: data?.insert_suppliers_one,
    loading,
    insertSupplier,
    error,
  };
};

export const useEditProduct = () => {
  const [updateProduct, { data, loading, error }] =
    useMutation(UPDATE_PRODUCT_BY_PK);
  return {
    updated: data?.update_products_by_pk,
    loading,
    updateProduct,
    error,
  };
};

export const useDeleteProduct = () => {
  const [deleteProduct, { data, loading, error }] = useMutation(
    DELETE_PRODUCT_BY_PK,
    {
      refetchQueries: [FETCH_SUPPLIER_PRODUCTS],
    }
  );
  return {
    data: data?.delete_products_by_pk,
    loading,
    deleteProduct,
    error,
  };
};

export const useAddNewProduct = () => {
  const [addNewProduct, { data, loading, error }] = useMutation(
    ADD_NEW_PRODUCT,
    {
      refetchQueries: [FETCH_SUPPLIER_PRODUCTS],
    }
  );
  return {
    data: data?.delete_products_by_pk,
    loading,
    addNewProduct,
    error,
  };
};

export const useFetchSupplierOrders = (supplierId?: string) => {
  const { error, data, loading } = useQuery(FETCH_SUPPLIER_ORDERS, {
    variables: {
      supplierId,
    },
  });
  return {
    error,
    data: data?.order_supplier,
    loading,
    ordersCount: data?.orders_aggregate?.aggregate,
  };
};

export const useFetchSupplierCategories = () => {
  const { error, data, loading } = useQuery(FETCH_SUPPLIER_CATEGORIES);

  return { error, data: data?.supplier_categories_enum, loading };
};

export const useOnboardSupplier = () => {
  const [onboardSupplier, { data, loading, error }] =
    useMutation(ONBOARD_NEW_SUPPLIER);
  return { onboardSupplier, data, loading, error };
};
