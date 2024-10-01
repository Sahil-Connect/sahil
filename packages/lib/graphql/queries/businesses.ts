import { gql } from "@apollo/client";

export const BUSINESS_CORE_FIELDS = gql`
  fragment BusinessCoreFields on business {
    id
    name
    contactName
    phoneNumber
    description
    contactEmail
    type
  }
`;

export const ADDRESS_FIELDS = gql`
  fragment AddressFields on addresses {
    city
    street_address
  }
`;

export const FETCH_BUSINESSES = gql`
  ${BUSINESS_CORE_FIELDS}
  ${ADDRESS_FIELDS}
  query getBusinesses {
    business {
      ...BusinessCoreFields
      created_at
      updated_at
      addresses {
        ...AddressFields
        created_at
        id
        latitude
        longitude
        updated_at
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
  ${BUSINESS_CORE_FIELDS}
  ${ADDRESS_FIELDS}
  query getBusinessByPK($id: uuid!) {
    business_by_pk(id: $id) {
      ...BusinessCoreFields
      agent {
        name
        id
      }
      addresses {
        ...AddressFields
      }
      schedule {
        id
        days
        shifts {
          id
          start_time
          end_time
        }
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
