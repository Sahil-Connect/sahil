import {
    gql,
} from "@apollo/client";

export const INSERT_NEW_SUPPLIER = gql`
mutation registerSupplier($object: suppliers_insert_input!) {
    insert_suppliers_one(object: $object) {
        id
        name
    }
}
`;