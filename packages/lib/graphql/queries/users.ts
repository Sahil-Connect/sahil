import { gql } from "@apollo/client";

export const USER_BASIC_FIELDS = gql`
  fragment UserBasicFields on users {
    id
    name
    role
  }
`;

export const USER_AUTH_FIELDS = gql`
  fragment UserAuthFields on users {
    email
    role
  }
`;

export const USER_INVITE_FIELDS = gql`
  fragment UserInviteFields on user_invites {
    id
    email
    name
    role
  }
`;

export const GET_USERS = gql`
  ${USER_BASIC_FIELDS}
  query getUsers {
    users {
      ...UserBasicFields
      created_at
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  ${USER_AUTH_FIELDS}
  query getUserByEmail($email: String!) {
    users(where: { email: { _eq: $email } }) {
      ...UserAuthFields
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

export const GET_LATEST_USER_INVITE = gql`
  ${USER_INVITE_FIELDS}
  query getUserInvites($email: String = "") {
    user_invites(
      where: { email: { _eq: $email } }
      limit: 1
      order_by: { created_at: desc }
    ) {
      ...UserInviteFields
    }
  }
`;

export const GET_USER_BY_PK = gql`
  ${USER_BASIC_FIELDS}
  query GetUserByPk($id: uuid!) {
    users_by_pk(id: $id) {
      ...UserBasicFields
      email
      created_at
      hasCompletedOnboarding
    }
  }
`;

export const GET_USER_ORGANIZATION = gql`
  query GetUserOrganizationSupplier($userId: uuid!) {
    suppliers(where: { user_id: { _eq: $userId } }) {
      id
      name
      user_id
    }
  }
`;

export const GET_USER_SUPPLIER = gql`
  query GetUserSupplier($userId: uuid!) {
    suppliers(where: { user_id: { _eq: $userId } }) {
      id
      name
      user_id
    }
  }
`;

export const GET_USER_BUSINESS = gql`
  query GetUserBusiness($userId: uuid!) {
    business(where: { owner_id: { _eq: $userId } }) {
      id
      name
      owner_id
    }
  }
`;


export const GET_ALL_SUPPLIERS = gql`
  query GetAllSuppliers {
    suppliers {
      id
      name
      user_id
    }
  }
`;
