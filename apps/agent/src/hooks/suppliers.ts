import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import {
  FETCH_FILTERED_SUPPLIERS,
  FETCH_SUPPLIERS,
  FETCH_SUPPLIER_BY_PK,
  FETCH_SUPPLIER_PRODUCTS,
} from '@/lib/graphql/queries/suppliers';
import { INSERT_NEW_SUPPLIER } from '@/lib/graphql/mutations/suppliers';
import { useMemo } from 'react';

export const useFetchSuppliers = () => {
  const router = useRouter();
  const { query } = router;
  const category = query.category;

  const graphqlQuery = category ? FETCH_FILTERED_SUPPLIERS : FETCH_SUPPLIERS;
  const { error, data, loading } = useQuery(graphqlQuery, {
    variables: {
      category_name: category!,
    },
  });

  return { error, data: data?.suppliers, loading };
};

export const useFetchSupplierByPK = (id: string) => {
  const { error, data, loading } = useQuery(FETCH_SUPPLIER_BY_PK, {
    variables: {
      id,
    },
  });
  return { error, data: data?.suppliers_by_pk, loading };
};

export const useFetchSupplierProducts = (page: number = 0, id?: string) => {
  const router = useRouter();
  const { supplierId } = router.query;
  const { error, data, loading } = useQuery(FETCH_SUPPLIER_PRODUCTS, {
    variables: {
      id: id || supplierId,
      offset: page * 8,
    },
  });

  // Memoize the result based on the page and ids
  const memoizedData = useMemo(() => {
    return { error, data: data?.products, loading };
  }, [page, id, supplierId, error, data, loading]);

  return memoizedData;
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
