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

export const GET_USER_BY_EMAIL = gql`
  query getUserByEmail($email: String!) {
    users(where: { email: { _eq: $email } }) {
      name
      email
      role
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

export const GET_LATEST_USER_INVITE = gql`
  query getUserInvites($email: String = "") {
    user_invites(
      where: { email: { _eq: $email } }
      limit: 1
      order_by: { created_at: desc }
    ) {
      id
      name
      role
    }
  }
`;
