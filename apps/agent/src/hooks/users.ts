import { useQuery } from "@apollo/client";
import { GET_USERS } from "@/lib/graphql/queries/users";


export const useGetUsers = () => {
    const { error, data, loading } = useQuery(GET_USERS);


    return { error, data: data?.users, loading };
}