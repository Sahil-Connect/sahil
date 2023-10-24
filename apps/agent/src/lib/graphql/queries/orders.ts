import {
    gql,
} from "@apollo/client";

export const FETCH_ORDERS = gql`
query getOrders {
    orders {
        created_at
        id
    }
}
`;