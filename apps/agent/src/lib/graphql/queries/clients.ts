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
        addresses {
            city
            created_at
            id
            latitude
            longitude
            updated_at
        }
    }
}
`;