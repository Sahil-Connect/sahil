import { useMutation, useQuery } from "@apollo/client";
import { FETCH_SUPPLIERS, FETCH_SUPPLIER_BY_PK } from "@/lib/graphql/queries/suppliers";
import { INSERT_NEW_SUPPLIER } from "@/lib/graphql/mutations/suppliers";

export const useFetchSuppliers = () => {
    const { error, data, loading, refetch } = useQuery(FETCH_SUPPLIERS);
    return { error, data: data?.suppliers, loading };
}

export const useFetchSupplierByPK = (id: string) => {
    const { error, data, loading, refetch } = useQuery(FETCH_SUPPLIER_BY_PK, {
        variables: {
            id
        }
    });
    return { error, data: data?.suppliers_by_pk, loading };
}

export const useRegisterSupplier = () => {
    const [insertSupplier, { data, loading, error }] = useMutation(INSERT_NEW_SUPPLIER);
    return { supplier: data?.insert_suppliers_one, loading, insertSupplier, error };
}
