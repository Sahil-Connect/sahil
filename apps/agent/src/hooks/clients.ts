import { useMutation, useQuery } from "@apollo/client";
import { GET_CLIENTS } from "@/lib/graphql/queries/clients";
import { INSERT_NEW_CLIENT } from "@/lib/graphql/mutations/clients";

export const useGetClients = () => {
    const { error, data, loading } = useQuery(GET_CLIENTS);
    return { error, data: data?.business, loading };
}

export const useRegisterClient = () => {
    const [insertClient, { data, loading, error }] = useMutation(INSERT_NEW_CLIENT);

    return {loading, insertClient, error};
}