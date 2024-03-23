import { gql } from "@apollo/client";

export const FETCH_PRODUCTS = gql`
  query getProducts($offset: Int = 0, $limit: Int = 12) {
    products(
      limit: $limit
      order_by: { created_at: desc }
      offset: $offset
    ) {
      discount
      id
      name
      price
      mainImage
      description
    }
    products_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;

export const FETCH_PRODUCTS_BY_NAME = gql`
  query getProductsByName(
    $offset: Int = 0
    $limit: Int = 12
    $name: String = ""
  ) {
    products(
      limit: $limit
      order_by: { created_at: desc }
      offset: $offset
      where: { inStock: { _eq: true }, name: { _ilike: $name } }
    ) {
      discount
      id
      name
      price
    }
    products_aggregate(
      where: { inStock: { _eq: true }, name: { _ilike: $name } }
    ) {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;
