import { useMutation, useQuery } from "@apollo/client";
import {
  GET_LATEST_USER_INVITE,
  GET_USERS,
  INSERT_NEW_INVITE,
  // INSERT_NEW_USER,
} from "@sahil/lib/graphql";
import {
  GetUserInvitesQuery,
  GetUsersQuery,
  GetUserInvitesQueryVariables,
  GetUsersQueryVariables,
  InsertNewInviteMutation,
  InsertNewInviteMutationVariables,
} from "../graphql/__generated__/graphql";

// export const useRegisterUserAction = () => {
//   const [registerUser, { data, loading, error }] = useMutation(INSERT_NEW_USER);

//   return { error, data: data?.users, loading, registerUser };
// };

export const useAddUserInvite = () => {
  const [addUserInvite, { data, loading, error }] = useMutation<
    InsertNewInviteMutation,
    InsertNewInviteMutationVariables
  >(INSERT_NEW_INVITE);

  return { error, data: data?.insert_user_invites_one, loading, addUserInvite };
};

export const useFetchUserInvites = () => {
  const { error, data, loading } = useQuery<
    GetUserInvitesQuery,
    GetUserInvitesQueryVariables
  >(GET_LATEST_USER_INVITE);
  return { error, data: data?.user_invites, loading };
};

export const useFetchUsers = () => {
  const { error, data, loading } = useQuery<
    GetUsersQuery,
    GetUsersQueryVariables
  >(GET_USERS);
  return { error, data: data?.users, loading };
};
