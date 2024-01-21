import { gql } from "@apollo/client";

export const INSERT_NEW_ORDER = gql`
  mutation insertBusinessOrder($object: orders_insert_input!) {
    insert_orders_one(object: $object) {
      id
    }
  }
`;

export const INIT_ORDER_ACTION = gql`
  mutation insertBusinessOrderAction(
    $object: InsertBusinessOrderOrdersInsertInput = {}
  ) {
    insertBusinessOrder(object: $object)
  }
`;
