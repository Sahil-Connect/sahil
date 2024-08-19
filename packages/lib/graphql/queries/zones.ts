import { gql } from "@apollo/client";

export const GET_ZONES = gql`
query GetZones {
  zones {
    id
    name
    description
    createdAt
    updatedAt
  }
}
`;

export const GET_ZONE_BY_ID = gql`
query GetZonesById($id: ID!) {
  zones(where: { id: $id }) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
`;