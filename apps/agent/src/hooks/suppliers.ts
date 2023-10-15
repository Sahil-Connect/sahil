import { useMutation, useQuery } from "@apollo/client";
import { FETCH_SUPPLIERS } from "@/lib/graphql/queries/suppliers";
import { INSERT_NEW_SUPPLIER } from "@/lib/graphql/mutations/suppliers";

export const useFetchSuppliers = () => {
    const { error, data, loading } = useQuery(FETCH_SUPPLIERS);
    return { error, data: data?.suppliers, loading };
}

export const useRegisterSupplier = () => {
    const [insertSupplier, { data, loading, error }] = useMutation(INSERT_NEW_SUPPLIER);

    return { loading, insertSupplier, error };
}
