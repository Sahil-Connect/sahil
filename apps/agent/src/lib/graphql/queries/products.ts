import {
    gql,
} from "@apollo/client";

export const FETCH_PRODUCTS = gql`
query getSuppliers {
    suppliers {
        created_at
        id
        name
    }
}
`;