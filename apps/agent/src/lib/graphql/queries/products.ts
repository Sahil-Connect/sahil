import { gql } from '@apollo/client';

export const FETCH_PRODUCTS = gql`
  query getProducts($offset: Int = 0, $limit: Int = 12) {
    products(
      limit: $limit
      order_by: { created_at: desc }
      offset: $offset
      where: { inStock: { _eq: true } }
    ) {
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
