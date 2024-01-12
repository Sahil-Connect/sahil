import { gql } from "@apollo/client";

export const INSERT_NEW_USER = gql`
  mutation registerUser($object: users_insert_input!) {
    insert_users_one(object: $object) {
      id
      name
    }
  }
`;
