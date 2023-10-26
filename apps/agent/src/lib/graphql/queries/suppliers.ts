import { gql } from '@apollo/client';

export const FETCH_SUPPLIERS = gql`
  query getSuppliers($offset: Int = 0, $limit: Int = 10) {
    suppliers(offset: $offset, limit: $limit) {
      id
      name
      streetAddress
      phoneNumber
      contactName
      zone
      categories {
        category_name
      }
    }
  }
`;

export const FETCH_FILTERED_SUPPLIERS = gql`
  query getFilteredSuppliers(
    $category_name: supplier_categories_enum_enum
    $offset: Int = 0
    $limit: Int = 10
  ) {
    suppliers(
      where: { categories: { category_name: { _eq: $category_name } } }
      offset: $offset
      limit: $limit
    ) {
      id
      name
      streetAddress
      phoneNumber
      contactName
      zone
      categories {
        category_name
      }
    }
  }
`;

export const FETCH_SUPPLIER_BY_PK = gql`
  query getSupplierByPK($id: uuid!) {
    suppliers_by_pk(id: $id) {
      created_at
      id
      name
      description
      phoneNumber
      contactName
      contactEmail
    }
  }
`;
