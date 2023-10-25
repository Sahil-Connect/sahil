import { gql } from '@apollo/client';

export const FETCH_SUPPLIERS = gql`
  query getSuppliers(
    $category_name: supplier_categories_enum_enum_comparison_exp = {}
    $offset: Int = 0
    $order_by: [suppliers_order_by!] = {}
    $limit: Int = 10
  ) {
    suppliers(
      where: { categories: { category_name: $category_name } }
      offset: $offset
      order_by: $order_by
      limit: $limit
    ) {
      id
      name
      streetAddress
      phoneNumber
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
