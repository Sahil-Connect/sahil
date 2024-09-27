import { gql } from "@apollo/client";

export const INSERT_NEW_USER = gql`
  mutation registerUserAction($object: RegisterUserActionUsersInsertInput!) {
    registerUserAction(object: $object)
  }
`;

export const INSERT_NEW_INVITE = gql`
  mutation insertNewInvite($object: user_invites_insert_input = {}) {
    insert_user_invites_one(object: $object) {
      id
    }
  }
`;
