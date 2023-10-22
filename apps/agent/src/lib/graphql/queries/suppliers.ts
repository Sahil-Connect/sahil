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

export const FETCH_SUPPLIER_BY_PK = gql`
query getSupplierByPK($id: uuid!) {
    suppliers_by_pk(id: $id) {
      created_at
      id
      name
    }
}
`;