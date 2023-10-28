import {
    gql,
} from "@apollo/client";

export const FETCH_PRODUCTS = gql`
query getProducts {
    products(limit: 10, order_by: { created_at: desc }) {
        discount
        id
        name
        price
    }
    products_aggregate {
    aggregate {
      count(columns: id, distinct: true)
    }
  }
}
`;