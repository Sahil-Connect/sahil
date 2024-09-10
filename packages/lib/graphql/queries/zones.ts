import { gql } from "@apollo/client";

export const GET_ZONES = gql`
query GetZones {
  zones {
    id
    name
    description
    created_at
    updated_at
  }
}
`;

export const GET_ZONE_BY_ID = gql`
query GetZonesById($id: uuid = "") {
  zones(where: {id: {_eq: $id}}) {
    id
    name
    description
    created_at
    updated_at
  }
}
`;