import { gql } from "@apollo/client";

export const INSERT_NEW_SUPPLIER = gql`
  mutation registerSupplier($object: suppliers_insert_input!) {
    insert_suppliers_one(object: $object) {
      id
      name
    }
  }
`;

export const UPDATE_PRODUCT_BY_PK = gql`
  mutation updateProductByPk(
    $id: uuid = ""
    $inStock: Boolean
    $name: String
    $price: Int
    $quantity: Int
    $description: String
  ) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: {
        inStock: $inStock
        name: $name
        price: $price
        quantity: $quantity
        description: $description
      }
    ) {
      id
      inStock
      name
      price
      quantity
      description
    }
  }
`;

export const DELETE_PRODUCT_BY_PK = gql`
  mutation deleteProductByPk($id: uuid = "") {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`;

export const ADD_NEW_PRODUCT = gql`
  mutation addNewProduct($product: products_insert_input = {}) {
    insert_products_one(object: $product) {
      created_at
      description
      discount
      id
      inStock
      name
      price
      quantity
      supplier_id
    }
  }
`;

export const ONBOARD_NEW_SUPPLIER = gql`
  mutation OnboardNewSupplier(
    $userId: uuid!
    $role: user_role_enum
    $object: suppliers_insert_input = {}
  ) {
    update_users_by_pk(
      pk_columns: { id: $userId }
      _set: { hasCompletedOnboarding: true, role: $role }
    ) {
      role
    }
    insert_suppliers_one(object: $object) {
      id
      schedule {
        days
        shifts {
          start_time
          end_time
        }
      }
    }
  }
`;
