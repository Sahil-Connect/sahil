import { gql } from "@apollo/client";

export const ZONE_FIELDS = gql`
  fragment ZoneFields on Zone {
    id
    name
    description
    createdAt
    updatedAt
  }
`;

export const GET_ZONES = gql`
  ${ZONE_FIELDS}
  query GetZones {
    zones {
      ...ZoneFields
    }
  }
`;

export const GET_ZONE_BY_ID = gql`
  ${ZONE_FIELDS}
  query GetZonesById($id: ID!) {
    zones(where: { id: $id }) {
      ...ZoneFields
    }
  }
`;