import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BUSINESSES, FETCH_BUSINESS_BY_PK } from "@/lib/graphql/queries/businesses";
import { INSERT_NEW_BUSINESS } from "@/lib/graphql/mutations/businesses";

export const useFetchBusinesses = () => {
    const { error, data, loading } = useQuery(FETCH_BUSINESSES);
    return { error, data: data?.business, loading };
}

export const useFetchBusinesssByPK = (id: string) => {
    const { error, data, loading } = useQuery(FETCH_BUSINESS_BY_PK, {
        variables: {
            id
        }
    });
    return { error, data: data?.business_by_pk, loading };
}

export const useRegisterBusiness = () => {
    const [insertClient, { data, loading, error }] = useMutation(INSERT_NEW_BUSINESS);

    return {loading, insertClient, error};
}