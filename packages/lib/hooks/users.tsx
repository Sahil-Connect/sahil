import { useMutation, useQuery } from "@apollo/client";
import {
  GET_LATEST_USER_INVITE,
  GET_USERS,
  GET_USER_BY_PK,
  GET_USER_ORGANIZATION,
  GET_USER_SUPPLIER,
  GET_USER_BUSINESS
} from "@sahil/lib/graphql/queries/users";
import {
  INSERT_NEW_INVITE
} from "@sahil/lib/graphql/mutations/users";
import {
  GetUserInvitesQuery,
  GetUsersQuery,
  GetUserInvitesQueryVariables,
  GetUsersQueryVariables,
  InsertNewInviteMutation,
  InsertNewInviteMutationVariables,
} from "../graphql/__generated__/graphql";

type Organization = {
  id: string;
  name: string;
  user_id: string;
};

type UserRole = 'supplier' | 'business' | 'agent';

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

export const useGetUserById = (userId?: string) => {
  const { error, data, loading } = useQuery(GET_USER_BY_PK, {
    variables: {
      id: userId
    },
    skip: !userId
  });
  
  return { error, data: data?.users_by_pk, loading };
};

export const useUserOrganization = (userId?: string, role?: UserRole) => {

  console.log("role", role);
  const getQueryForRole = () => {
    switch (role) {
      case 'supplier':
        return GET_USER_SUPPLIER;
      case 'business':
        return GET_USER_BUSINESS;
      default:
        return GET_USER_ORGANIZATION;
    }
  };

  const { data: org, loading: orgLoading, error: orgError } = useQuery(getQueryForRole(), {
    variables: { userId },
    skip: !userId
  });

  console.log("data", org);

  const getOrganization = (): Organization | null => {
    if (!org) return null;
    
    if (role === 'supplier') {
      return org.suppliers?.[0] || null;
    }
    
    if (role === 'business') {
      return org.businesses?.[0] || null;
    }
    
    return (
      org.suppliers?.[0] ||
      org.businesses?.[0] ||
      org.agents?.[0] ||
      null
    );
  };

  return { 
    organization: getOrganization(),
    loading: orgLoading,
    error: orgError
  };
};
