import {
    gql,
} from "@apollo/client";
  22
export const GET_USERS = gql`
query getUsers {
  users {
    id
    created_at
    role
    name
  }
}
`;