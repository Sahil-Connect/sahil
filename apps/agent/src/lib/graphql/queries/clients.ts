import {
    gql,
} from "@apollo/client";

export const GET_CLIENTS = gql`
query getClients {
    business {
        created_at
        id
        updated_at
        name
      }
}
`;