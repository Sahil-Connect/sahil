import {
    gql,
} from "@apollo/client";

export const FETCH_SUPPLIERS = gql`
query getSuppliers {
    supplier {
        created_at
        id
        name
    }
}
`;