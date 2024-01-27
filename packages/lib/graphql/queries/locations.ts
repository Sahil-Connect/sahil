import { gql } from "@apollo/client";

export const FETCH_SAHIL_ZONES = gql`
  query fetchSahilZones {
    locations {
      id
    }
  }
`;
