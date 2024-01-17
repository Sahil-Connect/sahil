import { gql } from "@apollo/client";

export const GET_ORDER_VALIDATION = gql`
  subscription getOrderValidation($id: uuid = "") {
    insertBusinessOrder(id: $id) {
      output {
        isValid
      }
    }
  }
`;
