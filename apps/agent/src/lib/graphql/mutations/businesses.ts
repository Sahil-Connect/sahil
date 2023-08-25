import {
    gql,
} from "@apollo/client";

export const INSERT_NEW_BUSINESS = gql`
mutation registerClient($object: business_insert_input!) {
    insert_business_one(object: $object) {
      id
      name
    }
  }
`;
