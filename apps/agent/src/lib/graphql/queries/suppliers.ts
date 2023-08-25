import {
    gql,
} from "@apollo/client";

export const FETCH_SUPPLIERS = gql`
query getSuppliers {
    suppliers {
        created_at
        id
        name
    }
}
`;