import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      created_at
      role
      name
    }
  }
`;

export const GET_ADDITIONAL_AUTH_USER_INFO = gql`
  query getAdditionalAuthUserInfo($id: uuid = "") {
    users_by_pk(id: $id) {
      hasCompletedOnboarding
      role
    }
  }
`;
