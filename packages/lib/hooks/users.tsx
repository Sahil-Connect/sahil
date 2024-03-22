import { useMutation, useQuery } from "@apollo/client";
import { GET_USERS, INSERT_NEW_USER } from "@sahil/lib/graphql";

export const useRegisterUserAction = () => {
    const [registerUser, { data, loading, error }] = useMutation(INSERT_NEW_USER);
  
    return { error, data: data?.users, loading, registerUser };
  };
  