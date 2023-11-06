import {
    gql,
} from "@apollo/client";

export const GET_PAYMENT_STATUS = gql`
query paymentStatus{
    paymentStatus(referenceId: $referenceId) {
    referenceId
    status
    financialTransactionId
    reason
  }
}
`;

export const GET_PREAPPROVAL_STATUS = gql`
query preApprovalStatus{
    preApprovalStatus(referenceId: $referenceId) {
    payer
    payerCurrency
    payerMessage
    status
    expirationDateTime
    reason
  }
}
`;

export const REQUEST_TO_PAY_STATUS = gql`
query requestToPayTransactionStatus{
    requestToPayTransactionStatus(referenceId: $referenceId) {
    amount
    currency
    financialTransactionId
    externalId
    payer
    payerMessage
    payeeNote
    status
    reason
  }
}
`;