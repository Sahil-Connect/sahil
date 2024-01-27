import { gql } from "@apollo/client";

export const INSERT_NEW_USER = gql`
  mutation registerUserAction($object: RegisterUserActionUsersInsertInput!) {
    registerUserAction(object: $object)
  }
`;
