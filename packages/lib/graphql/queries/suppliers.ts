import { gql } from "@apollo/client";

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
    suppliers_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;

export const FETCH_SUPPLIER_ORDERS = gql`
  query getSupplierOrders($supplierId: uuid) {
    order_supplier(
      where: { supplierId: { _eq: $supplierId } }
      distinct_on: supplierId
    ) {
      id
      supplierId
      order {
        id
        created_at
        destination
        id
        orderId
        customerId
        origin
        status
        business {
          contactName
          phoneNumber
          name
        }
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
      streetAddress
      zone
      categories {
        category_name
      }
      products_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export const FETCH_SUPPLIER_PRODUCTS = gql`
  query getSupplierProducts(
    $id: uuid!
    $offset: Int = 0
    $limit: Int = 4
    $order_by: [products_order_by!] = { name: asc }
  ) {
    products(
      where: { supplier_id: { _eq: $id } }
      limit: $limit
      offset: $offset
      order_by: $order_by
    ) {
      id
      name
      description
      inStock
      quantity
      price
      mainImage
    }
  }
`;

export const FETCH_SUPPLIER_PRODUCT_BY_NAME = gql`
  query getSupplierProductByName(
    $id: uuid!
    $offset: Int = 0
    $name: String = ""
    $limit: Int = 4
    $order_by: [products_order_by!] = { name: asc }
  ) {
    products(
      where: { supplier_id: { _eq: $id }, name: { _ilike: $name } }
      limit: $limit
      offset: $offset
      order_by: $order_by
    ) {
      id
      name
      description
      inStock
      quantity
      price
    }
  }
`;
