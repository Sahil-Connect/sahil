import { gql } from "@apollo/client";

export const ORDER_FRAGMENT = gql`
  fragment order on orders {
    id
  }
`;