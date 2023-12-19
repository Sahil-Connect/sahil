import { useQuery } from '@apollo/client';
import {
  GET_MOMO_USER_BASIC_INFO,
  GET_MOMO_USER_INFO_WITH_CONSENT,
} from '@sahil/lib/graphql';

export const useGetBasicUserInfo = () => {
  const { error, data, loading } = useQuery(GET_MOMO_USER_BASIC_INFO);
  return { error, data: data, loading };
};

export const useGetUserInfoWithConsent = () => {
  const { error, data, loading } = useQuery(GET_MOMO_USER_INFO_WITH_CONSENT);
  return { error, data: data, loading };
};
