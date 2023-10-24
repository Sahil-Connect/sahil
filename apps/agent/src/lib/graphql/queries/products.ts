import {
    gql,
} from "@apollo/client";

export const FETCH_PRODUCTS = gql`
query getProducts {
    products {
        id
        name
        price
    }
}
`;