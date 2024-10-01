import { gql } from "@apollo/client";

export const SUPPLIER_FIELDS_FRAGMENT = gql`
  fragment SupplierFields on suppliers {
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
`;

export const PRODUCT_FIELDS_FRAGMENT = gql`
  fragment ProductFields on products {
    id
    name
    description
    inStock
    quantity
    price
  }
`;

export const FETCH_SUPPLIERS = gql`
  ${SUPPLIER_FIELDS_FRAGMENT}
  query getSuppliers($offset: Int = 0, $limit: Int = 10) {
    suppliers(offset: $offset, limit: $limit) {
      ...SupplierFields
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
  ${SUPPLIER_FIELDS_FRAGMENT}
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
      ...SupplierFields
    }
  }
`;

export const FETCH_SUPPLIER_BY_PK = gql`
  ${SUPPLIER_FIELDS_FRAGMENT}
  query getSupplierByPK($id: uuid!) {
    suppliers_by_pk(id: $id) {
      ...SupplierFields
      created_at
      description
      contactEmail
      products_aggregate {
        aggregate {
          count
        }
      }
      schedule {
        id
        days
        shifts {
          id
          start_time
          end_time
        }
      }
    }
  }
`;

export const FETCH_SUPPLIER_PRODUCTS = gql`
  ${PRODUCT_FIELDS_FRAGMENT}
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
      ...ProductFields
      mainImage
    }
  }
`;

export const FETCH_SUPPLIER_PRODUCT_BY_NAME = gql`
  ${PRODUCT_FIELDS_FRAGMENT}
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
      ...ProductFields
    }
  }
`;

export const FETCH_SUPPLIER_CATEGORIES = gql`
  query getSupplierCategories @cached {
    supplier_categories_enum {
      name
    }
  }
`;
