import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "@/lib/graphql/queries/clients";

export const useGetClients = () => {
    const { error, data, loading } = useQuery(GET_CLIENTS);
    return { error, data: data?.business, loading };
}