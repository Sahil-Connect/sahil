/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation registerClient($object: business_insert_input!) {\n    insert_business_one(object: $object) {\n      id\n      name\n    }\n  }\n": types.RegisterClientDocument,
    "\nmutation insertBusinessAddress($object: addresses_insert_input!) {\n    insert_addresses_one(object: $object) {\n      business_id\n      city\n    }\n  }\n": types.InsertBusinessAddressDocument,
    "\n  mutation insertNewCourier($object: couriers_insert_input = {}) {\n    insert_couriers_one(object: $object) {\n      id\n      name\n    }\n  }\n": types.InsertNewCourierDocument,
    "\nmutation insertBusinessOrder($object: orders_insert_input!) {\n    insert_orders_one(object: $object) {\n      id\n    }\n  }\n": types.InsertBusinessOrderDocument,
    "\n  mutation registerSupplier($object: suppliers_insert_input!) {\n    insert_suppliers_one(object: $object) {\n      id\n      name\n    }\n  }\n": types.RegisterSupplierDocument,
    "\n  mutation updateProductByPk(\n    $id: uuid = \"\"\n    $inStock: Boolean\n    $name: String\n    $price: Int\n    $quantity: Int\n    $description: String\n  ) {\n    update_products_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        inStock: $inStock\n        name: $name\n        price: $price\n        quantity: $quantity\n        description: $description\n      }\n    ) {\n      id\n      inStock\n      name\n      price\n      quantity\n      description\n    }\n  }\n": types.UpdateProductByPkDocument,
    "\n  mutation deleteProductByPk($id: uuid = \"\") {\n    delete_products_by_pk(id: $id) {\n      id\n    }\n  }\n": types.DeleteProductByPkDocument,
    "\n  mutation addNewProduct($product: products_insert_input = {}) {\n    insert_products_one(object: $product) {\n      created_at\n      description\n      discount\n      id\n      inStock\n      name\n      price\n      quantity\n      supplier_id\n    }\n  }\n": types.AddNewProductDocument,
    "\nmutation registerUser($object: users_insert_input!) {\n    insert_users_one(object: $object) {\n      id\n      name\n    }\n  }\n": types.RegisterUserDocument,
    "\n  query getClients {\n    business {\n      created_at\n      id\n      updated_at\n      name\n      contactName\n      type\n      phoneNumber\n      description\n      contactEmail\n      addresses {\n        city\n        created_at\n        id\n        latitude\n        longitude\n        updated_at\n        street_address\n      }\n    }\n    business_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n": types.GetClientsDocument,
    "\n  query getBusinessOrders(\n    $customerId: uuid\n    $limit: Int = 4\n    $offset: Int = 0\n  ) {\n    orders(\n      where: {\n        _or: [\n          { customerId: { _eq: $customerId } }\n          { customerId: { _is_null: true } }\n        ]\n        customerId: { _eq: $customerId }\n      }\n      limit: $limit\n      offset: $offset\n    ) {\n      id\n      created_at\n      destination\n      id\n      orderId\n      customerId\n      origin\n      status\n      business {\n        contactName\n        phoneNumber\n        name\n      }\n    }\n    orders_aggregate(where: { customerId: { _eq: $customerId } }) {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n": types.GetBusinessOrdersDocument,
    "\n  query getBusinessByPK($id: uuid!) {\n    business_by_pk(id: $id) {\n      id\n      name\n      contactName\n      phoneNumber\n      description\n      contactEmail\n      type\n      agent {\n        name\n        id\n      }\n      addresses {\n        city\n        street_address\n      }\n    }\n  }\n": types.GetBusinessByPkDocument,
    "\n  query getCouriers {\n    couriers {\n      id\n      avatar\n      name\n      DOB\n      phoneNumber\n      gender\n      email\n    }\n    couriers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n": types.GetCouriersDocument,
    "\n  query getCouriersByPK($id: uuid!) {\n    couriers_by_pk(id: $id) {\n      id\n      name\n      avatar\n    }\n  }\n": types.GetCouriersByPkDocument,
    "\nquery fetchSahilZones {\n    locations {\n      id\n    }\n  }\n": types.FetchSahilZonesDocument,
    "\nquery getOrders {\n    orders {\n      id\n      created_at\n      destination\n      id\n      orderId\n      customerId\n      origin\n      status\n      business {\n      contactName\n      phoneNumber\n      name\n    }\n    }\n    orders_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n}\n": types.GetOrdersDocument,
    "\nquery getorderByPK($id: uuid!) {\n  orders_by_pk(id: $id) {\n    id\n    created_at\n    destination\n    id\n    orderId\n    customerId\n    origin\n    status\n    order_items {\n      id\n      product {\n        id\n        name\n        quantity\n        price\n      }\n    }\n    status\n    agent {\n      name\n    }\n    order_items_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n": types.GetorderByPkDocument,
    "\nquery getOrderDeliveries($orderId: uuid!) {\n  delivery {\n    orderId\n    status\n    orderId\n    id\n    created_at\n    courierId\n  }\n  }\n": types.GetOrderDeliveriesDocument,
    "\nquery getOrdersStats($startDate: timestamptz, $endDate: timestamptz) {\n  orders_aggregate(where: {created_at: {_gte: $startDate, _lte: $endDate}}) {\n    aggregate {\n      count\n    }\n  }\n}\n": types.GetOrdersStatsDocument,
    "\n  query getProducts($offset: Int = 0, $limit: Int = 12) {\n    products(\n      limit: $limit\n      order_by: { created_at: desc }\n      offset: $offset\n      where: { inStock: { _eq: true } }\n    ) {\n      discount\n      id\n      name\n      price\n    }\n    products_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query getProductsByName($offset: Int = 0, $limit: Int = 12, $name: String = \"\") {\n    products(\n      limit: $limit\n      order_by: { created_at: desc }\n      offset: $offset\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      discount\n      id\n      name\n      price\n    }\n    products_aggregate(\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n": types.GetProductsByNameDocument,
    "\n  query getSuppliers($offset: Int = 0, $limit: Int = 10) {\n    suppliers(offset: $offset, limit: $limit) {\n      id\n      name\n      streetAddress\n      phoneNumber\n      contactName\n      zone\n      categories {\n        category_name\n      }\n    }\n    suppliers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n": types.GetSuppliersDocument,
    "\nquery getSupplierOrders($supplierId: uuid) {\n  order_supplier(where: {supplierId: {_eq: $supplierId}}, distinct_on: supplierId) {\n    id\n    supplierId\n    order {\n      id\n      created_at\n      destination\n      id\n      orderId\n      customerId\n      origin\n      status\n      business {\n      contactName\n      phoneNumber\n      name\n    }\n  }\n}\n}\n": types.GetSupplierOrdersDocument,
    "\n  query getFilteredSuppliers(\n    $category_name: supplier_categories_enum_enum\n    $offset: Int = 0\n    $limit: Int = 10\n  ) {\n    suppliers(\n      where: { categories: { category_name: { _eq: $category_name } } }\n      offset: $offset\n      limit: $limit\n    ) {\n      id\n      name\n      streetAddress\n      phoneNumber\n      contactName\n      zone\n      categories {\n        category_name\n      }\n    }\n  }\n": types.GetFilteredSuppliersDocument,
    "\n  query getSupplierByPK($id: uuid!) {\n    suppliers_by_pk(id: $id) {\n      created_at\n      id\n      name\n      description\n      phoneNumber\n      contactName\n      contactEmail\n      streetAddress\n      zone\n      categories {\n        category_name\n      }\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n": types.GetSupplierByPkDocument,
    "\n  query getSupplierProducts(\n    $id: uuid!\n    $offset: Int = 0\n    $order_by: [products_order_by!] = {}\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id } }\n      limit: 4\n      offset: $offset\n      order_by: $order_by\n    ) {\n      id\n      name\n      description\n      inStock\n      quantity\n      price\n    }\n  }\n": types.GetSupplierProductsDocument,
    "\n  query getSupplierProductByName(\n    $id: uuid!\n    $offset: Int = 0\n    $name: String = \"\"\n    $limit: Int = 4\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id }, name: { _ilike: $name } }\n      limit: $limit\n      offset: $offset\n    ) {\n      id\n      name\n      description\n      inStock\n      quantity\n      price\n    }\n  }\n": types.GetSupplierProductByNameDocument,
    "\nquery getUsers {\n  users {\n    id\n    created_at\n    role\n    name\n  }\n}\n": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation registerClient($object: business_insert_input!) {\n    insert_business_one(object: $object) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\nmutation registerClient($object: business_insert_input!) {\n    insert_business_one(object: $object) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation insertBusinessAddress($object: addresses_insert_input!) {\n    insert_addresses_one(object: $object) {\n      business_id\n      city\n    }\n  }\n"): (typeof documents)["\nmutation insertBusinessAddress($object: addresses_insert_input!) {\n    insert_addresses_one(object: $object) {\n      business_id\n      city\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation insertNewCourier($object: couriers_insert_input = {}) {\n    insert_couriers_one(object: $object) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation insertNewCourier($object: couriers_insert_input = {}) {\n    insert_couriers_one(object: $object) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation insertBusinessOrder($object: orders_insert_input!) {\n    insert_orders_one(object: $object) {\n      id\n    }\n  }\n"): (typeof documents)["\nmutation insertBusinessOrder($object: orders_insert_input!) {\n    insert_orders_one(object: $object) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation registerSupplier($object: suppliers_insert_input!) {\n    insert_suppliers_one(object: $object) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation registerSupplier($object: suppliers_insert_input!) {\n    insert_suppliers_one(object: $object) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateProductByPk(\n    $id: uuid = \"\"\n    $inStock: Boolean\n    $name: String\n    $price: Int\n    $quantity: Int\n    $description: String\n  ) {\n    update_products_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        inStock: $inStock\n        name: $name\n        price: $price\n        quantity: $quantity\n        description: $description\n      }\n    ) {\n      id\n      inStock\n      name\n      price\n      quantity\n      description\n    }\n  }\n"): (typeof documents)["\n  mutation updateProductByPk(\n    $id: uuid = \"\"\n    $inStock: Boolean\n    $name: String\n    $price: Int\n    $quantity: Int\n    $description: String\n  ) {\n    update_products_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        inStock: $inStock\n        name: $name\n        price: $price\n        quantity: $quantity\n        description: $description\n      }\n    ) {\n      id\n      inStock\n      name\n      price\n      quantity\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteProductByPk($id: uuid = \"\") {\n    delete_products_by_pk(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteProductByPk($id: uuid = \"\") {\n    delete_products_by_pk(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addNewProduct($product: products_insert_input = {}) {\n    insert_products_one(object: $product) {\n      created_at\n      description\n      discount\n      id\n      inStock\n      name\n      price\n      quantity\n      supplier_id\n    }\n  }\n"): (typeof documents)["\n  mutation addNewProduct($product: products_insert_input = {}) {\n    insert_products_one(object: $product) {\n      created_at\n      description\n      discount\n      id\n      inStock\n      name\n      price\n      quantity\n      supplier_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation registerUser($object: users_insert_input!) {\n    insert_users_one(object: $object) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\nmutation registerUser($object: users_insert_input!) {\n    insert_users_one(object: $object) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getClients {\n    business {\n      created_at\n      id\n      updated_at\n      name\n      contactName\n      type\n      phoneNumber\n      description\n      contactEmail\n      addresses {\n        city\n        created_at\n        id\n        latitude\n        longitude\n        updated_at\n        street_address\n      }\n    }\n    business_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"): (typeof documents)["\n  query getClients {\n    business {\n      created_at\n      id\n      updated_at\n      name\n      contactName\n      type\n      phoneNumber\n      description\n      contactEmail\n      addresses {\n        city\n        created_at\n        id\n        latitude\n        longitude\n        updated_at\n        street_address\n      }\n    }\n    business_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getBusinessOrders(\n    $customerId: uuid\n    $limit: Int = 4\n    $offset: Int = 0\n  ) {\n    orders(\n      where: {\n        _or: [\n          { customerId: { _eq: $customerId } }\n          { customerId: { _is_null: true } }\n        ]\n        customerId: { _eq: $customerId }\n      }\n      limit: $limit\n      offset: $offset\n    ) {\n      id\n      created_at\n      destination\n      id\n      orderId\n      customerId\n      origin\n      status\n      business {\n        contactName\n        phoneNumber\n        name\n      }\n    }\n    orders_aggregate(where: { customerId: { _eq: $customerId } }) {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"): (typeof documents)["\n  query getBusinessOrders(\n    $customerId: uuid\n    $limit: Int = 4\n    $offset: Int = 0\n  ) {\n    orders(\n      where: {\n        _or: [\n          { customerId: { _eq: $customerId } }\n          { customerId: { _is_null: true } }\n        ]\n        customerId: { _eq: $customerId }\n      }\n      limit: $limit\n      offset: $offset\n    ) {\n      id\n      created_at\n      destination\n      id\n      orderId\n      customerId\n      origin\n      status\n      business {\n        contactName\n        phoneNumber\n        name\n      }\n    }\n    orders_aggregate(where: { customerId: { _eq: $customerId } }) {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getBusinessByPK($id: uuid!) {\n    business_by_pk(id: $id) {\n      id\n      name\n      contactName\n      phoneNumber\n      description\n      contactEmail\n      type\n      agent {\n        name\n        id\n      }\n      addresses {\n        city\n        street_address\n      }\n    }\n  }\n"): (typeof documents)["\n  query getBusinessByPK($id: uuid!) {\n    business_by_pk(id: $id) {\n      id\n      name\n      contactName\n      phoneNumber\n      description\n      contactEmail\n      type\n      agent {\n        name\n        id\n      }\n      addresses {\n        city\n        street_address\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCouriers {\n    couriers {\n      id\n      avatar\n      name\n      DOB\n      phoneNumber\n      gender\n      email\n    }\n    couriers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCouriers {\n    couriers {\n      id\n      avatar\n      name\n      DOB\n      phoneNumber\n      gender\n      email\n    }\n    couriers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCouriersByPK($id: uuid!) {\n    couriers_by_pk(id: $id) {\n      id\n      name\n      avatar\n    }\n  }\n"): (typeof documents)["\n  query getCouriersByPK($id: uuid!) {\n    couriers_by_pk(id: $id) {\n      id\n      name\n      avatar\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery fetchSahilZones {\n    locations {\n      id\n    }\n  }\n"): (typeof documents)["\nquery fetchSahilZones {\n    locations {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getOrders {\n    orders {\n      id\n      created_at\n      destination\n      id\n      orderId\n      customerId\n      origin\n      status\n      business {\n      contactName\n      phoneNumber\n      name\n    }\n    }\n    orders_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n}\n"): (typeof documents)["\nquery getOrders {\n    orders {\n      id\n      created_at\n      destination\n      id\n      orderId\n      customerId\n      origin\n      status\n      business {\n      contactName\n      phoneNumber\n      name\n    }\n    }\n    orders_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getorderByPK($id: uuid!) {\n  orders_by_pk(id: $id) {\n    id\n    created_at\n    destination\n    id\n    orderId\n    customerId\n    origin\n    status\n    order_items {\n      id\n      product {\n        id\n        name\n        quantity\n        price\n      }\n    }\n    status\n    agent {\n      name\n    }\n    order_items_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery getorderByPK($id: uuid!) {\n  orders_by_pk(id: $id) {\n    id\n    created_at\n    destination\n    id\n    orderId\n    customerId\n    origin\n    status\n    order_items {\n      id\n      product {\n        id\n        name\n        quantity\n        price\n      }\n    }\n    status\n    agent {\n      name\n    }\n    order_items_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getOrderDeliveries($orderId: uuid!) {\n  delivery {\n    orderId\n    status\n    orderId\n    id\n    created_at\n    courierId\n  }\n  }\n"): (typeof documents)["\nquery getOrderDeliveries($orderId: uuid!) {\n  delivery {\n    orderId\n    status\n    orderId\n    id\n    created_at\n    courierId\n  }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getOrdersStats($startDate: timestamptz, $endDate: timestamptz) {\n  orders_aggregate(where: {created_at: {_gte: $startDate, _lte: $endDate}}) {\n    aggregate {\n      count\n    }\n  }\n}\n"): (typeof documents)["\nquery getOrdersStats($startDate: timestamptz, $endDate: timestamptz) {\n  orders_aggregate(where: {created_at: {_gte: $startDate, _lte: $endDate}}) {\n    aggregate {\n      count\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProducts($offset: Int = 0, $limit: Int = 12) {\n    products(\n      limit: $limit\n      order_by: { created_at: desc }\n      offset: $offset\n      where: { inStock: { _eq: true } }\n    ) {\n      discount\n      id\n      name\n      price\n    }\n    products_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProducts($offset: Int = 0, $limit: Int = 12) {\n    products(\n      limit: $limit\n      order_by: { created_at: desc }\n      offset: $offset\n      where: { inStock: { _eq: true } }\n    ) {\n      discount\n      id\n      name\n      price\n    }\n    products_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProductsByName($offset: Int = 0, $limit: Int = 12, $name: String = \"\") {\n    products(\n      limit: $limit\n      order_by: { created_at: desc }\n      offset: $offset\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      discount\n      id\n      name\n      price\n    }\n    products_aggregate(\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProductsByName($offset: Int = 0, $limit: Int = 12, $name: String = \"\") {\n    products(\n      limit: $limit\n      order_by: { created_at: desc }\n      offset: $offset\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      discount\n      id\n      name\n      price\n    }\n    products_aggregate(\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSuppliers($offset: Int = 0, $limit: Int = 10) {\n    suppliers(offset: $offset, limit: $limit) {\n      id\n      name\n      streetAddress\n      phoneNumber\n      contactName\n      zone\n      categories {\n        category_name\n      }\n    }\n    suppliers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"): (typeof documents)["\n  query getSuppliers($offset: Int = 0, $limit: Int = 10) {\n    suppliers(offset: $offset, limit: $limit) {\n      id\n      name\n      streetAddress\n      phoneNumber\n      contactName\n      zone\n      categories {\n        category_name\n      }\n    }\n    suppliers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getSupplierOrders($supplierId: uuid) {\n  order_supplier(where: {supplierId: {_eq: $supplierId}}, distinct_on: supplierId) {\n    id\n    supplierId\n    order {\n      id\n      created_at\n      destination\n      id\n      orderId\n      customerId\n      origin\n      status\n      business {\n      contactName\n      phoneNumber\n      name\n    }\n  }\n}\n}\n"): (typeof documents)["\nquery getSupplierOrders($supplierId: uuid) {\n  order_supplier(where: {supplierId: {_eq: $supplierId}}, distinct_on: supplierId) {\n    id\n    supplierId\n    order {\n      id\n      created_at\n      destination\n      id\n      orderId\n      customerId\n      origin\n      status\n      business {\n      contactName\n      phoneNumber\n      name\n    }\n  }\n}\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getFilteredSuppliers(\n    $category_name: supplier_categories_enum_enum\n    $offset: Int = 0\n    $limit: Int = 10\n  ) {\n    suppliers(\n      where: { categories: { category_name: { _eq: $category_name } } }\n      offset: $offset\n      limit: $limit\n    ) {\n      id\n      name\n      streetAddress\n      phoneNumber\n      contactName\n      zone\n      categories {\n        category_name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getFilteredSuppliers(\n    $category_name: supplier_categories_enum_enum\n    $offset: Int = 0\n    $limit: Int = 10\n  ) {\n    suppliers(\n      where: { categories: { category_name: { _eq: $category_name } } }\n      offset: $offset\n      limit: $limit\n    ) {\n      id\n      name\n      streetAddress\n      phoneNumber\n      contactName\n      zone\n      categories {\n        category_name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSupplierByPK($id: uuid!) {\n    suppliers_by_pk(id: $id) {\n      created_at\n      id\n      name\n      description\n      phoneNumber\n      contactName\n      contactEmail\n      streetAddress\n      zone\n      categories {\n        category_name\n      }\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getSupplierByPK($id: uuid!) {\n    suppliers_by_pk(id: $id) {\n      created_at\n      id\n      name\n      description\n      phoneNumber\n      contactName\n      contactEmail\n      streetAddress\n      zone\n      categories {\n        category_name\n      }\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSupplierProducts(\n    $id: uuid!\n    $offset: Int = 0\n    $order_by: [products_order_by!] = {}\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id } }\n      limit: 4\n      offset: $offset\n      order_by: $order_by\n    ) {\n      id\n      name\n      description\n      inStock\n      quantity\n      price\n    }\n  }\n"): (typeof documents)["\n  query getSupplierProducts(\n    $id: uuid!\n    $offset: Int = 0\n    $order_by: [products_order_by!] = {}\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id } }\n      limit: 4\n      offset: $offset\n      order_by: $order_by\n    ) {\n      id\n      name\n      description\n      inStock\n      quantity\n      price\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSupplierProductByName(\n    $id: uuid!\n    $offset: Int = 0\n    $name: String = \"\"\n    $limit: Int = 4\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id }, name: { _ilike: $name } }\n      limit: $limit\n      offset: $offset\n    ) {\n      id\n      name\n      description\n      inStock\n      quantity\n      price\n    }\n  }\n"): (typeof documents)["\n  query getSupplierProductByName(\n    $id: uuid!\n    $offset: Int = 0\n    $name: String = \"\"\n    $limit: Int = 4\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id }, name: { _ilike: $name } }\n      limit: $limit\n      offset: $offset\n    ) {\n      id\n      name\n      description\n      inStock\n      quantity\n      price\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getUsers {\n  users {\n    id\n    created_at\n    role\n    name\n  }\n}\n"): (typeof documents)["\nquery getUsers {\n  users {\n    id\n    created_at\n    role\n    name\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;