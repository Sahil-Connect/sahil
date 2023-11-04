import {
    gql,
} from "@apollo/client";

export const GET_ACCOUNT_BALANCE = gql`
query accountBalance {
    accountBalance {
    availableBalance
    currency
  }
}
`;