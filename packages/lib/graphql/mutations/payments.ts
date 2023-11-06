import {
    gql,
  } from "@apollo/client";
  
  export const REQUEST_TO_PAY = gql`
  mutation requesTtoPay($object: RequestToPayInput!) {
    requestToPay(object: $object) {
    message
    status
  }
    }
  `;