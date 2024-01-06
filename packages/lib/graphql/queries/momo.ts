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

export const GET_MOMO_USER_BASIC_INFO = gql`
  query basicUserInfo {
    basicUserInfo(accountHolderMSISDN: $accountHolderMsisdn) {
      given_name
      family_name
      birthdate
      locale
      gender
      status
    }
  }
`;

export const GET_MOMO_USER_INFO_WITH_CONSENT = gql`
  query userInfoWithConsent {
    userInfoWithConsent {
      sub
      name
      given_name
      family_name
      middle_name
      email
      email_verified
      gender
      locale
      phone_number
      phone_number_verified
      address
      updated_at
      status
      birthdate
      credit_score
      active
      country_of_birth
      region_of_birth
      city_of_birth
      occupation
      employer_name
      identification_type
      identification_value
    }
  }
`;
