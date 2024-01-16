import { gql } from "@apollo/client";

export const INSERT_NEW_ORDER = gql`
  mutation insertBusinessOrder($object: orders_insert_input!) {
    insert_orders_one(object: $object) {
      id
    }
  }
`;
