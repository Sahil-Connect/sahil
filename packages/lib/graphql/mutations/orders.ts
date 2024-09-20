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

export const APPEND_ORDER_STATUS = gql`
  mutation MyMutation($object: order_status_history_insert_input = {}) {
    insert_order_status_history_one(object: $object) {
      id
    }
  }
`;
