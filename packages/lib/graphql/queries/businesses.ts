import { gql } from "@apollo/client";

export const FETCH_BUSINESSES = gql`
  query getBusinesses {
    business {
      created_at
      id
      updated_at
      name
      contactName
      type
      phoneNumber
      description
      contactEmail
      addresses {
        city
        created_at
        id
        latitude
        longitude
        updated_at
        street_address
      }
    }
    business_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;

export const FETCH_BUSINESS_ORDERS = gql`
  query getBusinessOrders(
    $customerId: uuid
    $limit: Int = 4
    $offset: Int = 0
  ) {
    orders(
      where: {
        _or: [
          { customerId: { _eq: $customerId } }
          { customerId: { _is_null: true } }
        ]
        customerId: { _eq: $customerId }
      }
      limit: $limit
      offset: $offset
    ) {
      id
      created_at
      destination
      id
      orderId
      customerId
      origin
      status
      business {
        contactName
        phoneNumber
        name
      }
    }
    orders_aggregate(where: { customerId: { _eq: $customerId } }) {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;

export const FETCH_BUSINESS_BY_PK = gql`
  query getBusinessByPK($id: uuid!) {
    business_by_pk(id: $id) {
      id
      name
      contactName
      phoneNumber
      description
      contactEmail
      type
      agent {
        name
        id
      }
      addresses {
        city
        street_address
      }
    }
  }
`;

export const FETCH_BUSINESS_TYPES = gql`
  query getBusinessTypes @cached {
    business_type {
      type
    }
  }
`;
