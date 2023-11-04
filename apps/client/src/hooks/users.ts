import { useQuery } from "@apollo/client";
import { GET_USER_BASIC_INFO, GET_USER_INFO_WITH_CONSENT } from "@/lib/graphql/queries/users";

export const useGetBasicUserInfo = () => {
  const { error, data, loading } = useQuery(GET_USER_BASIC_INFO);
  return { error, data: data, loading };
};

export const useGetUserInfoWithConsent = () => {
    const { error, data, loading } = useQuery(GET_USER_INFO_WITH_CONSENT);
    return { error, data: data, loading };
  };
  