import {
    gql,
} from "@apollo/client";

export const FETCH_COURIERS = gql`
query getCouriers {
    couriers {
        created_at
        id
        avatar
        name
    }
}
`;