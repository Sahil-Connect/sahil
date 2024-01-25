import { gql } from "@apollo/client";

export const INSERT_NEW_BUSINESS = gql`
  mutation registerBusiness($object: business_insert_input!) {
    insert_business_one(object: $object) {
      id
      name
    }
  }
`;

export const REGISTER_BUSINESS_ACTION = gql`
  mutation registerBusinessAction(
    $object: RegisterBusinessActionBusinessInsertInput!
  ) {
    registerBusinessAction(object: $object)
  }
`;

export const INSERT_BUSINESS_ADDRESS = gql`
  mutation insertBusinessAddress($object: addresses_insert_input!) {
    insert_addresses_one(object: $object) {
      business_id
      city
    }
  }
`;
