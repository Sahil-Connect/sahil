import { gql } from "@apollo/client";

export const BUSINESS_VALIDATED = gql`
  subscription MySubscription {
    registerBusinessAction(id: "a9872403-36db-4423-ab05-b8d1d4dec326") {
      created_at
      errors
      id
      output {
        id
        name
      }
    }
  }
`;
