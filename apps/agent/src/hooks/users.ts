import { useMutation, useQuery } from "@apollo/client";
import { GET_USERS, INSERT_NEW_USER } from "@sahil/lib/graphql";

export const useGetUsers = () => {
  const { error, data, loading } = useQuery(GET_USERS);
  return { error, data: data?.users, loading };
};
