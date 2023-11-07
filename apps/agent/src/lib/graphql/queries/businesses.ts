import {
    gql,
} from "@apollo/client";

export const FETCH_BUSINESSES = gql`
query getClients {
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