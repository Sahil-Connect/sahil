import { gql } from "@apollo/client";

export const INSERT_NEW_COURIER = gql`
  mutation insertNewCourier($object: couriers_insert_input = {}) {
    insert_couriers_one(object: $object) {
      id
      name
    }
  }
`;
