import { gql } from "@apollo/client";

export const PRODUCT_FIELDS = gql`
  fragment ProductFields on products {
    discount
    id
    name
    price
  }
`;

export const PRODUCTS_AGGREGATE = gql`
  fragment ProductsAggregate on products_aggregate {
    aggregate {
      count(columns: id, distinct: true)
    }
  }
`;

export const FETCH_PRODUCTS = gql`
  ${PRODUCT_FIELDS}
  ${PRODUCTS_AGGREGATE}
  query getProducts($offset: Int = 0, $limit: Int = 12) {
    products(limit: $limit, order_by: { created_at: desc }, offset: $offset) {
      ...ProductFields
      mainImage
      description
    }
    products_aggregate {
      ...ProductsAggregate
    }
  }
`;

export const FETCH_PRODUCTS_BY_NAME = gql`
  ${PRODUCT_FIELDS}
  ${PRODUCTS_AGGREGATE}
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
      ...ProductFields
    }
    products_aggregate(
      where: { inStock: { _eq: true }, name: { _ilike: $name } }
    ) {
      ...ProductsAggregate
    }
  }
`;
