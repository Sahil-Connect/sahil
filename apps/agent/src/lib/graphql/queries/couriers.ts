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
    couriers_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
}
`;

export const FETCH_COURIER_BY_PK = gql`
query getCouriersByPK($id: uuid!) {
    couriers_by_pk(id: $id) {
        id
        name
        avatar
    }
}
`;