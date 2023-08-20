import { useMutation, useQuery } from "@apollo/client";
import { GET_USERS } from "@/lib/graphql/queries/users";
import { INSERT_NEW_USER } from "@/lib/graphql/mutations/users";

export const useGetUsers = () => {
    const { error, data, loading } = useQuery(GET_USERS);
    return { error, data: data?.users, loading };
}

export const useInsertUser = () => {
    const [insertUser, { data, loading, error }] = useMutation(INSERT_NEW_USER);

    return { error, data: data?.users, loading };
}