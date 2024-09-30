import { gql } from "@apollo/client";

export const ZONE_FIELDS = gql`
  fragment ZoneFields on zones {
    id
    name
    description
    created_at
    updated_at
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
  query GetZonesById($id: uuid!) {
    zones(where: { id: {_eq: $id } }) {
      ...ZoneFields
    }
  }
`;