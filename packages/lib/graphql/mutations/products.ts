import { gql } from '@apollo/client';

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($input: products_insert_input!) {
    insert_products_one(object: $input) {
      id
      name
      description
      price
      quantity
      discount
      inStock
      mainImage
      created_at
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: uuid!, $input: products_set_input!) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: $input
    ) {
      id
      name
      description
      price
      quantity
      discount
      inStock
      mainImage
      created_at
    }
  }
`; 