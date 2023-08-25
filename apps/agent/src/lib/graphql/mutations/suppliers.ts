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

export const INSERT_NEW_SUPPLIER = gql`
mutation registerSupplier($object: supplier_insert_input!) {
    insert_supplier_one(object: $object) {
        id
        name
    }
}
`;