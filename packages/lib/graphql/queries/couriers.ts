import { gql } from "@apollo/client";

export const COURIER_BASIC_FIELDS = gql`
  fragment CourierBasicFields on couriers {
    id
    name
    avatar
  }
`;

export const COURIER_EXTENDED_FIELDS = gql`
  fragment CourierExtendedFields on couriers {
    ...CourierBasicFields
    DOB
    phoneNumber
    gender
    email
  }
`;

export const FETCH_COURIERS = gql`
  ${COURIER_BASIC_FIELDS}
  ${COURIER_EXTENDED_FIELDS}
  query getCouriers {
    couriers {
      ...CourierExtendedFields
    }
    couriers_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;

export const FETCH_COURIER_BY_PK = gql`
  ${COURIER_BASIC_FIELDS}
  query getCouriersByPK($id: uuid!) {
    couriers_by_pk(id: $id) {
      ...CourierBasicFields
    }
  }
`;
