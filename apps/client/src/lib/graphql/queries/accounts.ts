import { gql } from '@apollo/client';

export const GET_ACCOUNT_BALANCE = gql`
  query accountBalance {
    accountBalance {
      availableBalance
      currency
    }
  }
`;

export const GET_MOMO_ACCOUNT_INFO = gql`
  query getMomoAccountInfo($accountHolderMSISDN: String = "56733123453") {
    basicUserInfo(accountHolderMSISDN: $accountHolderMSISDN) {
      given_name
      family_name
      gender
      status
    }
  }
`;
