import {
    gql,
  } from "@apollo/client";
  
  export const REQUEST_TO_PAY = gql`
  mutation registerClient($amount: Float!, $externalId: String!, $partyId: String!, $partyIdType: String!) {
    requestToPay(amount: $amount, currency: "SSP", externalId: $externalId, partyId: $partyId, partyIdType: $partyIdType) {
    message
    status
  }
    }
  `;