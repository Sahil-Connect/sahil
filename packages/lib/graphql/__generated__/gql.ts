/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

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
  "\n  fragment order on orders {\n    id\n  }\n": types.OrderFragmentDoc,
  "\n  mutation registerBusiness($object: business_insert_input!) {\n    insert_business_one(object: $object) {\n      id\n      name\n    }\n  }\n":
    types.RegisterBusinessDocument,
  "\n  mutation insertBusinessAddress($object: addresses_insert_input!) {\n    insert_addresses_one(object: $object) {\n      business_id\n      city\n    }\n  }\n":
    types.InsertBusinessAddressDocument,
  "\n  mutation OnboardNewBusiness(\n    $userId: uuid!\n    $role: user_role_enum\n    $object: business_insert_input = {}\n  ) {\n    update_users_by_pk(\n      pk_columns: { id: $userId }\n      _set: { hasCompletedOnboarding: true, role: $role }\n    ) {\n      role\n    }\n    insert_business_one(object: $object) {\n      id\n      schedule {\n        days\n        shifts {\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n":
    types.OnboardNewBusinessDocument,
  "\n  mutation insertNewCourier($object: couriers_insert_input = {}) {\n    insert_couriers_one(object: $object) {\n      id\n      name\n    }\n  }\n":
    types.InsertNewCourierDocument,
  "\n  mutation insertBusinessOrder($object: orders_insert_input!) {\n    insert_orders_one(object: $object) {\n      id\n    }\n  }\n":
    types.InsertBusinessOrderDocument,
  "\n  mutation MyMutation($object: order_status_history_insert_input = {}) {\n    insert_order_status_history_one(object: $object) {\n      id\n    }\n  }\n":
    types.MyMutationDocument,
  "\n  mutation registerSupplier($object: suppliers_insert_input!) {\n    insert_suppliers_one(object: $object) {\n      id\n      name\n    }\n  }\n":
    types.RegisterSupplierDocument,
  '\n  mutation updateProductByPk(\n    $id: uuid = ""\n    $inStock: Boolean\n    $name: String\n    $price: Int\n    $quantity: Int\n    $description: String\n  ) {\n    update_products_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        inStock: $inStock\n        name: $name\n        price: $price\n        quantity: $quantity\n        description: $description\n      }\n    ) {\n      id\n      inStock\n      name\n      price\n      quantity\n      description\n    }\n  }\n':
    types.UpdateProductByPkDocument,
  '\n  mutation deleteProductByPk($id: uuid = "") {\n    delete_products_by_pk(id: $id) {\n      id\n    }\n  }\n':
    types.DeleteProductByPkDocument,
  "\n  mutation addNewProduct($product: products_insert_input = {}) {\n    insert_products_one(object: $product) {\n      created_at\n      description\n      discount\n      id\n      inStock\n      name\n      price\n      quantity\n      supplier_id\n    }\n  }\n":
    types.AddNewProductDocument,
  "\n  mutation OnboardNewSupplier(\n    $userId: uuid!\n    $role: user_role_enum\n    $object: suppliers_insert_input = {}\n  ) {\n    update_users_by_pk(\n      pk_columns: { id: $userId }\n      _set: { hasCompletedOnboarding: true, role: $role }\n    ) {\n      role\n    }\n    insert_suppliers_one(object: $object) {\n      id\n      schedule {\n        days\n        shifts {\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n":
    types.OnboardNewSupplierDocument,
  "\n  mutation insertNewInvite($object: user_invites_insert_input = {}) {\n    insert_user_invites_one(object: $object) {\n      id\n    }\n  }\n":
    types.InsertNewInviteDocument,
  "\n  fragment BusinessCoreFields on business {\n    id\n    name\n    contactName\n    phoneNumber\n    description\n    contactEmail\n    type\n  }\n":
    types.BusinessCoreFieldsFragmentDoc,
  "\n  fragment AddressFields on addresses {\n    city\n    street_address\n  }\n":
    types.AddressFieldsFragmentDoc,
  "\n  \n  \n  query getBusinesses {\n    business {\n      ...BusinessCoreFields\n      created_at\n      updated_at\n      addresses {\n        ...AddressFields\n        created_at\n        id\n        latitude\n        longitude\n        updated_at\n      }\n    }\n    business_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n":
    types.GetBusinessesDocument,
  "\n  query getBusinessOrders(\n    $customerId: uuid\n    $limit: Int = 4\n    $offset: Int = 0\n  ) {\n    orders(\n      where: {\n        _or: [\n          { customerId: { _eq: $customerId } }\n          { customerId: { _is_null: true } }\n        ]\n        customerId: { _eq: $customerId }\n      }\n      limit: $limit\n      offset: $offset\n    ) {\n      id\n      created_at\n      destination\n      id\n      customerId\n      origin\n      status\n      business {\n        contactName\n        phoneNumber\n        name\n      }\n    }\n    orders_aggregate(where: { customerId: { _eq: $customerId } }) {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n":
    types.GetBusinessOrdersDocument,
  "\n  \n  \n  query getBusinessByPK($id: uuid!) {\n    business_by_pk(id: $id) {\n      ...BusinessCoreFields\n      agent {\n        name\n        id\n      }\n      addresses {\n        ...AddressFields\n      }\n      schedule {\n        id\n        days\n        shifts {\n          id\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n":
    types.GetBusinessByPkDocument,
  "\n  query getBusinessTypes @cached {\n    business_type {\n      type\n    }\n  }\n":
    types.GetBusinessTypesDocument,
  "\n  fragment CourierBasicFields on couriers {\n    id\n    name\n    avatar\n  }\n":
    types.CourierBasicFieldsFragmentDoc,
  "\n  fragment CourierExtendedFields on couriers {\n    ...CourierBasicFields\n    DOB\n    phoneNumber\n    gender\n    email\n  }\n":
    types.CourierExtendedFieldsFragmentDoc,
  "\n  \n  \n  query getCouriers {\n    couriers {\n      ...CourierExtendedFields\n    }\n    couriers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n":
    types.GetCouriersDocument,
  "\n  \n  query getCouriersByPK($id: uuid!) {\n    couriers_by_pk(id: $id) {\n      ...CourierBasicFields\n    }\n  }\n":
    types.GetCouriersByPkDocument,
  "\n  fragment DeliveryFields on delivery {\n    id\n    created_at\n  }\n":
    types.DeliveryFieldsFragmentDoc,
  "\n  fragment DeliveryRequestFields on delivery_request {\n    id\n    created_at\n    delivery_method\n    status\n    courierId\n    created_at\n    updated_at\n  }\n":
    types.DeliveryRequestFieldsFragmentDoc,
  "\n  \n  query getDeliveries {\n    delivery {\n      ...DeliveryFields\n      order {\n      customerId\n      created_at\n      order_items {\n        product {\n          created_at\n          description\n          discount\n          name\n          price\n          quantity\n          inStock\n        }\n      }\n    }\n    }\n    delivery_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n":
    types.GetDeliveriesDocument,
  "\n  \n  query getDeliveryByPK($id: uuid!) {\n    delivery(where: { id: { _eq: $id } }) {\n      ...DeliveryFields\n      order {\n      customerId\n      created_at\n      status\n      order_items {\n        product {\n          created_at\n          description\n          discount\n          name\n          price\n          quantity\n          inStock\n        }\n      }\n    }\n    }\n  }\n":
    types.GetDeliveryByPkDocument,
  "\n  \n  query getDeliveriesByCourier($courier_id: uuid!) {\n    delivery(where: { courierId: { _eq: $courier_id } }) {\n      ...DeliveryFields\n      order {\n      customerId\n      created_at\n      order_items {\n        product {\n          created_at\n          description\n          discount\n          name\n          price\n          quantity\n          inStock\n        }\n      }\n    }\n    }\n  }\n":
    types.GetDeliveriesByCourierDocument,
  "\n  \n  query getDeliveryRequests {\n    delivery_request {\n      ...DeliveryRequestFields\n      delivery_request_orders {\n        id\n        order_id\n        order {\n          id\n          order_items {\n            id\n            product {\n              id\n              description\n              discount\n              inStock\n              mainImage\n              name\n              quantity\n              price\n            }\n          }\n        }\n      }\n    }\n    delivery_request_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n":
    types.GetDeliveryRequestsDocument,
  "\n  \n  query getDeliveryRequestByPK($id: uuid!) {\n    delivery_request(where: { id: { _eq: $id } }) {\n      ...DeliveryRequestFields\n      delivery_request_orders {\n        id\n        order_id\n        order {\n          id\n          order_items {\n            id\n            product {\n              id\n              description\n              discount\n              inStock\n              mainImage\n              name\n              quantity\n              price\n            }\n          }\n        }\n      }\n    }\n  }\n":
    types.GetDeliveryRequestByPkDocument,
  "\n  \n  query getDeliveryRequestByCourier($courier_id: uuid!) {\n    delivery_request(where: { courierId: { _eq: $courier_id } }) {\n      ...DeliveryRequestFields\n    }\n  }\n":
    types.GetDeliveryRequestByCourierDocument,
  "\n  query fetchSahilZones {\n    locations {\n      id\n    }\n  }\n":
    types.FetchSahilZonesDocument,
  "\n  fragment OrderCoreFields on orders {\n    id\n    created_at\n    destination\n    customerId\n    origin\n    status\n  }\n":
    types.OrderCoreFieldsFragmentDoc,
  "\n  fragment OrderBusinessFields on business {\n    id\n    contactName\n    phoneNumber\n    name\n  }\n":
    types.OrderBusinessFieldsFragmentDoc,
  "\n  fragment OrderItemsAggregate on orders {\n    order_items_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.OrderItemsAggregateFragmentDoc,
  "\n  fragment LatestStatusHistory on orders {\n    status_histories(limit: 1, order_by: { created_at: desc }) {\n      created_at\n      status\n    }\n  }\n":
    types.LatestStatusHistoryFragmentDoc,
  "\n  fragment AllStatusHistories on orders {\n    status_histories(order_by: { created_at: desc }) {\n      status\n      created_at\n    }\n  }\n":
    types.AllStatusHistoriesFragmentDoc,
  "\n  \n  \n  \n  query getOrders {\n    orders {\n      ...OrderCoreFields\n      ...LatestStatusHistory\n      business {\n        ...OrderBusinessFields\n      }\n    }\n    orders_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n":
    types.GetOrdersDocument,
  "\n  \n  \n  \n  \n  query getOrderByPK($id: uuid!) {\n    orders_by_pk(id: $id) {\n      ...OrderCoreFields\n      ...OrderItemsAggregate\n      ...AllStatusHistories\n      business {\n        ...OrderBusinessFields\n      }\n      order_items {\n        id\n        product {\n          id\n          name\n          quantity\n          price\n        }\n      }\n      agent {\n        name\n      }\n    }\n  }\n":
    types.GetOrderByPkDocument,
  "\n  query getOrderDeliveries($orderId: uuid!) {\n    delivery {\n      status\n      id\n      created_at\n      courierId\n    }\n  }\n":
    types.GetOrderDeliveriesDocument,
  "\n  query getOrdersStats($startDate: timestamptz, $endDate: timestamptz) {\n    orders_aggregate(\n      where: { created_at: { _gte: $startDate, _lte: $endDate } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n":
    types.GetOrdersStatsDocument,
  "\n  fragment ProductFields on products {\n    discount\n    id\n    name\n    price\n  }\n":
    types.ProductFieldsFragmentDoc,
  "\n  fragment ProductsAggregate on products_aggregate {\n    aggregate {\n      count(columns: id, distinct: true)\n    }\n  }\n":
    types.ProductsAggregateFragmentDoc,
  "\n  \n  \n  query getProducts($offset: Int = 0, $limit: Int = 12) {\n    products(limit: $limit, order_by: { created_at: desc }, offset: $offset) {\n      ...ProductFields\n      mainImage\n      description\n    }\n    products_aggregate {\n      ...ProductsAggregate\n    }\n  }\n":
    types.GetProductsDocument,
  '\n  \n  \n  query getProductsByName(\n    $offset: Int = 0\n    $limit: Int = 12\n    $name: String = ""\n  ) {\n    products(\n      limit: $limit\n      order_by: { created_at: desc }\n      offset: $offset\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      ...ProductFields\n    }\n    products_aggregate(\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      ...ProductsAggregate\n    }\n  }\n':
    types.GetProductsByNameDocument,
  "\n  fragment SupplierFields on suppliers {\n    id\n    name\n    streetAddress\n    phoneNumber\n    contactName\n    zone\n    categories {\n      category_name\n    }\n  }\n":
    types.SupplierFieldsFragmentDoc,
  "\n  fragment SupplierProductFields on products {\n    id\n    name\n    description\n    inStock\n    quantity\n    price\n  }\n":
    types.SupplierProductFieldsFragmentDoc,
  "\n  \n  query getSuppliers($offset: Int = 0, $limit: Int = 10) {\n    suppliers(offset: $offset, limit: $limit) {\n      ...SupplierFields\n    }\n    suppliers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n":
    types.GetSuppliersDocument,
  "\n  query getSupplierOrders($supplierId: uuid) {\n    order_supplier(\n      where: { supplierId: { _eq: $supplierId } }\n      distinct_on: supplierId\n    ) {\n      id\n      supplierId\n      order {\n        id\n        created_at\n        destination\n        id\n        customerId\n        origin\n        status\n        business {\n          contactName\n          phoneNumber\n          name\n        }\n      }\n    }\n  }\n":
    types.GetSupplierOrdersDocument,
  "\n  \n  query getFilteredSuppliers(\n    $category_name: supplier_categories_enum_enum\n    $offset: Int = 0\n    $limit: Int = 10\n  ) {\n    suppliers(\n      where: { categories: { category_name: { _eq: $category_name } } }\n      offset: $offset\n      limit: $limit\n    ) {\n      ...SupplierFields\n    }\n  }\n":
    types.GetFilteredSuppliersDocument,
  "\n  \n  query getSupplierByPK($id: uuid!) {\n    suppliers_by_pk(id: $id) {\n      ...SupplierFields\n      created_at\n      description\n      contactEmail\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n      schedule {\n        id\n        days\n        shifts {\n          id\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n":
    types.GetSupplierByPkDocument,
  "\n  \n  query getSupplierProducts(\n    $id: uuid!\n    $offset: Int = 0\n    $limit: Int = 4\n    $order_by: [products_order_by!] = { name: asc }\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id } }\n      limit: $limit\n      offset: $offset\n      order_by: $order_by\n    ) {\n      ...SupplierProductFields\n      mainImage\n    }\n  }\n":
    types.GetSupplierProductsDocument,
  '\n  \n  query getSupplierProductByName(\n    $id: uuid!\n    $offset: Int = 0\n    $name: String = ""\n    $limit: Int = 4\n    $order_by: [products_order_by!] = { name: asc }\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id }, name: { _ilike: $name } }\n      limit: $limit\n      offset: $offset\n      order_by: $order_by\n    ) {\n      ...SupplierProductFields\n    }\n  }\n':
    types.GetSupplierProductByNameDocument,
  "\n  query getSupplierCategories @cached {\n    supplier_categories_enum {\n      name\n    }\n  }\n":
    types.GetSupplierCategoriesDocument,
  "\n  fragment UserBasicFields on users {\n    id\n    name\n    role\n  }\n":
    types.UserBasicFieldsFragmentDoc,
  "\n  fragment UserAuthFields on users {\n    email\n    role\n  }\n":
    types.UserAuthFieldsFragmentDoc,
  "\n  fragment UserInviteFields on user_invites {\n    id\n    email\n    name\n    role\n  }\n":
    types.UserInviteFieldsFragmentDoc,
  "\n  \n  query getUsers {\n    users {\n      ...UserBasicFields\n      created_at\n    }\n  }\n":
    types.GetUsersDocument,
  "\n  \n  query getUserByEmail($email: String!) {\n    users(where: { email: { _eq: $email } }) {\n      ...UserAuthFields\n      name\n    }\n  }\n":
    types.GetUserByEmailDocument,
  '\n  query getAdditionalAuthUserInfo($id: uuid = "") {\n    users_by_pk(id: $id) {\n      hasCompletedOnboarding\n      role\n    }\n  }\n':
    types.GetAdditionalAuthUserInfoDocument,
  '\n  \n  query getUserInvites($email: String = "") {\n    user_invites(\n      where: { email: { _eq: $email } }\n      limit: 1\n      order_by: { created_at: desc }\n    ) {\n      ...UserInviteFields\n    }\n  }\n':
    types.GetUserInvitesDocument,
  "\n  fragment ZoneFields on zones {\n    id\n    name\n    description\n    created_at\n    updated_at\n  }\n":
    types.ZoneFieldsFragmentDoc,
  "\n  \n  query GetZones {\n    zones {\n      ...ZoneFields\n    }\n  }\n":
    types.GetZonesDocument,
  "\n  \n  query GetZonesById($id: uuid!) {\n    zones(where: { id: { _eq: $id } }) {\n      ...ZoneFields\n    }\n  }\n":
    types.GetZonesByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment order on orders {\n    id\n  }\n"
): (typeof documents)["\n  fragment order on orders {\n    id\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation registerBusiness($object: business_insert_input!) {\n    insert_business_one(object: $object) {\n      id\n      name\n    }\n  }\n"
): (typeof documents)["\n  mutation registerBusiness($object: business_insert_input!) {\n    insert_business_one(object: $object) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation insertBusinessAddress($object: addresses_insert_input!) {\n    insert_addresses_one(object: $object) {\n      business_id\n      city\n    }\n  }\n"
): (typeof documents)["\n  mutation insertBusinessAddress($object: addresses_insert_input!) {\n    insert_addresses_one(object: $object) {\n      business_id\n      city\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation OnboardNewBusiness(\n    $userId: uuid!\n    $role: user_role_enum\n    $object: business_insert_input = {}\n  ) {\n    update_users_by_pk(\n      pk_columns: { id: $userId }\n      _set: { hasCompletedOnboarding: true, role: $role }\n    ) {\n      role\n    }\n    insert_business_one(object: $object) {\n      id\n      schedule {\n        days\n        shifts {\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation OnboardNewBusiness(\n    $userId: uuid!\n    $role: user_role_enum\n    $object: business_insert_input = {}\n  ) {\n    update_users_by_pk(\n      pk_columns: { id: $userId }\n      _set: { hasCompletedOnboarding: true, role: $role }\n    ) {\n      role\n    }\n    insert_business_one(object: $object) {\n      id\n      schedule {\n        days\n        shifts {\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation insertNewCourier($object: couriers_insert_input = {}) {\n    insert_couriers_one(object: $object) {\n      id\n      name\n    }\n  }\n"
): (typeof documents)["\n  mutation insertNewCourier($object: couriers_insert_input = {}) {\n    insert_couriers_one(object: $object) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation insertBusinessOrder($object: orders_insert_input!) {\n    insert_orders_one(object: $object) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation insertBusinessOrder($object: orders_insert_input!) {\n    insert_orders_one(object: $object) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation MyMutation($object: order_status_history_insert_input = {}) {\n    insert_order_status_history_one(object: $object) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation MyMutation($object: order_status_history_insert_input = {}) {\n    insert_order_status_history_one(object: $object) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation registerSupplier($object: suppliers_insert_input!) {\n    insert_suppliers_one(object: $object) {\n      id\n      name\n    }\n  }\n"
): (typeof documents)["\n  mutation registerSupplier($object: suppliers_insert_input!) {\n    insert_suppliers_one(object: $object) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation updateProductByPk(\n    $id: uuid = ""\n    $inStock: Boolean\n    $name: String\n    $price: Int\n    $quantity: Int\n    $description: String\n  ) {\n    update_products_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        inStock: $inStock\n        name: $name\n        price: $price\n        quantity: $quantity\n        description: $description\n      }\n    ) {\n      id\n      inStock\n      name\n      price\n      quantity\n      description\n    }\n  }\n'
): (typeof documents)['\n  mutation updateProductByPk(\n    $id: uuid = ""\n    $inStock: Boolean\n    $name: String\n    $price: Int\n    $quantity: Int\n    $description: String\n  ) {\n    update_products_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        inStock: $inStock\n        name: $name\n        price: $price\n        quantity: $quantity\n        description: $description\n      }\n    ) {\n      id\n      inStock\n      name\n      price\n      quantity\n      description\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation deleteProductByPk($id: uuid = "") {\n    delete_products_by_pk(id: $id) {\n      id\n    }\n  }\n'
): (typeof documents)['\n  mutation deleteProductByPk($id: uuid = "") {\n    delete_products_by_pk(id: $id) {\n      id\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation addNewProduct($product: products_insert_input = {}) {\n    insert_products_one(object: $product) {\n      created_at\n      description\n      discount\n      id\n      inStock\n      name\n      price\n      quantity\n      supplier_id\n    }\n  }\n"
): (typeof documents)["\n  mutation addNewProduct($product: products_insert_input = {}) {\n    insert_products_one(object: $product) {\n      created_at\n      description\n      discount\n      id\n      inStock\n      name\n      price\n      quantity\n      supplier_id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation OnboardNewSupplier(\n    $userId: uuid!\n    $role: user_role_enum\n    $object: suppliers_insert_input = {}\n  ) {\n    update_users_by_pk(\n      pk_columns: { id: $userId }\n      _set: { hasCompletedOnboarding: true, role: $role }\n    ) {\n      role\n    }\n    insert_suppliers_one(object: $object) {\n      id\n      schedule {\n        days\n        shifts {\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  mutation OnboardNewSupplier(\n    $userId: uuid!\n    $role: user_role_enum\n    $object: suppliers_insert_input = {}\n  ) {\n    update_users_by_pk(\n      pk_columns: { id: $userId }\n      _set: { hasCompletedOnboarding: true, role: $role }\n    ) {\n      role\n    }\n    insert_suppliers_one(object: $object) {\n      id\n      schedule {\n        days\n        shifts {\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation insertNewInvite($object: user_invites_insert_input = {}) {\n    insert_user_invites_one(object: $object) {\n      id\n    }\n  }\n"
): (typeof documents)["\n  mutation insertNewInvite($object: user_invites_insert_input = {}) {\n    insert_user_invites_one(object: $object) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment BusinessCoreFields on business {\n    id\n    name\n    contactName\n    phoneNumber\n    description\n    contactEmail\n    type\n  }\n"
): (typeof documents)["\n  fragment BusinessCoreFields on business {\n    id\n    name\n    contactName\n    phoneNumber\n    description\n    contactEmail\n    type\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment AddressFields on addresses {\n    city\n    street_address\n  }\n"
): (typeof documents)["\n  fragment AddressFields on addresses {\n    city\n    street_address\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  \n  query getBusinesses {\n    business {\n      ...BusinessCoreFields\n      created_at\n      updated_at\n      addresses {\n        ...AddressFields\n        created_at\n        id\n        latitude\n        longitude\n        updated_at\n      }\n    }\n    business_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"
): (typeof documents)["\n  \n  \n  query getBusinesses {\n    business {\n      ...BusinessCoreFields\n      created_at\n      updated_at\n      addresses {\n        ...AddressFields\n        created_at\n        id\n        latitude\n        longitude\n        updated_at\n      }\n    }\n    business_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query getBusinessOrders(\n    $customerId: uuid\n    $limit: Int = 4\n    $offset: Int = 0\n  ) {\n    orders(\n      where: {\n        _or: [\n          { customerId: { _eq: $customerId } }\n          { customerId: { _is_null: true } }\n        ]\n        customerId: { _eq: $customerId }\n      }\n      limit: $limit\n      offset: $offset\n    ) {\n      id\n      created_at\n      destination\n      id\n      customerId\n      origin\n      status\n      business {\n        contactName\n        phoneNumber\n        name\n      }\n    }\n    orders_aggregate(where: { customerId: { _eq: $customerId } }) {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"
): (typeof documents)["\n  query getBusinessOrders(\n    $customerId: uuid\n    $limit: Int = 4\n    $offset: Int = 0\n  ) {\n    orders(\n      where: {\n        _or: [\n          { customerId: { _eq: $customerId } }\n          { customerId: { _is_null: true } }\n        ]\n        customerId: { _eq: $customerId }\n      }\n      limit: $limit\n      offset: $offset\n    ) {\n      id\n      created_at\n      destination\n      id\n      customerId\n      origin\n      status\n      business {\n        contactName\n        phoneNumber\n        name\n      }\n    }\n    orders_aggregate(where: { customerId: { _eq: $customerId } }) {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  \n  query getBusinessByPK($id: uuid!) {\n    business_by_pk(id: $id) {\n      ...BusinessCoreFields\n      agent {\n        name\n        id\n      }\n      addresses {\n        ...AddressFields\n      }\n      schedule {\n        id\n        days\n        shifts {\n          id\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  \n  \n  query getBusinessByPK($id: uuid!) {\n    business_by_pk(id: $id) {\n      ...BusinessCoreFields\n      agent {\n        name\n        id\n      }\n      addresses {\n        ...AddressFields\n      }\n      schedule {\n        id\n        days\n        shifts {\n          id\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query getBusinessTypes @cached {\n    business_type {\n      type\n    }\n  }\n"
): (typeof documents)["\n  query getBusinessTypes @cached {\n    business_type {\n      type\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment CourierBasicFields on couriers {\n    id\n    name\n    avatar\n  }\n"
): (typeof documents)["\n  fragment CourierBasicFields on couriers {\n    id\n    name\n    avatar\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment CourierExtendedFields on couriers {\n    ...CourierBasicFields\n    DOB\n    phoneNumber\n    gender\n    email\n  }\n"
): (typeof documents)["\n  fragment CourierExtendedFields on couriers {\n    ...CourierBasicFields\n    DOB\n    phoneNumber\n    gender\n    email\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  \n  query getCouriers {\n    couriers {\n      ...CourierExtendedFields\n    }\n    couriers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"
): (typeof documents)["\n  \n  \n  query getCouriers {\n    couriers {\n      ...CourierExtendedFields\n    }\n    couriers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getCouriersByPK($id: uuid!) {\n    couriers_by_pk(id: $id) {\n      ...CourierBasicFields\n    }\n  }\n"
): (typeof documents)["\n  \n  query getCouriersByPK($id: uuid!) {\n    couriers_by_pk(id: $id) {\n      ...CourierBasicFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment DeliveryFields on delivery {\n    id\n    created_at\n  }\n"
): (typeof documents)["\n  fragment DeliveryFields on delivery {\n    id\n    created_at\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment DeliveryRequestFields on delivery_request {\n    id\n    created_at\n    delivery_method\n    status\n    courierId\n    created_at\n    updated_at\n  }\n"
): (typeof documents)["\n  fragment DeliveryRequestFields on delivery_request {\n    id\n    created_at\n    delivery_method\n    status\n    courierId\n    created_at\n    updated_at\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getDeliveries {\n    delivery {\n      ...DeliveryFields\n      order {\n      customerId\n      created_at\n      order_items {\n        product {\n          created_at\n          description\n          discount\n          name\n          price\n          quantity\n          inStock\n        }\n      }\n    }\n    }\n    delivery_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"
): (typeof documents)["\n  \n  query getDeliveries {\n    delivery {\n      ...DeliveryFields\n      order {\n      customerId\n      created_at\n      order_items {\n        product {\n          created_at\n          description\n          discount\n          name\n          price\n          quantity\n          inStock\n        }\n      }\n    }\n    }\n    delivery_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getDeliveryByPK($id: uuid!) {\n    delivery(where: { id: { _eq: $id } }) {\n      ...DeliveryFields\n      order {\n      customerId\n      created_at\n      status\n      order_items {\n        product {\n          created_at\n          description\n          discount\n          name\n          price\n          quantity\n          inStock\n        }\n      }\n    }\n    }\n  }\n"
): (typeof documents)["\n  \n  query getDeliveryByPK($id: uuid!) {\n    delivery(where: { id: { _eq: $id } }) {\n      ...DeliveryFields\n      order {\n      customerId\n      created_at\n      status\n      order_items {\n        product {\n          created_at\n          description\n          discount\n          name\n          price\n          quantity\n          inStock\n        }\n      }\n    }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getDeliveriesByCourier($courier_id: uuid!) {\n    delivery(where: { courierId: { _eq: $courier_id } }) {\n      ...DeliveryFields\n      order {\n      customerId\n      created_at\n      order_items {\n        product {\n          created_at\n          description\n          discount\n          name\n          price\n          quantity\n          inStock\n        }\n      }\n    }\n    }\n  }\n"
): (typeof documents)["\n  \n  query getDeliveriesByCourier($courier_id: uuid!) {\n    delivery(where: { courierId: { _eq: $courier_id } }) {\n      ...DeliveryFields\n      order {\n      customerId\n      created_at\n      order_items {\n        product {\n          created_at\n          description\n          discount\n          name\n          price\n          quantity\n          inStock\n        }\n      }\n    }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getDeliveryRequests {\n    delivery_request {\n      ...DeliveryRequestFields\n      delivery_request_orders {\n        id\n        order_id\n        order {\n          id\n          order_items {\n            id\n            product {\n              id\n              description\n              discount\n              inStock\n              mainImage\n              name\n              quantity\n              price\n            }\n          }\n        }\n      }\n    }\n    delivery_request_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"
): (typeof documents)["\n  \n  query getDeliveryRequests {\n    delivery_request {\n      ...DeliveryRequestFields\n      delivery_request_orders {\n        id\n        order_id\n        order {\n          id\n          order_items {\n            id\n            product {\n              id\n              description\n              discount\n              inStock\n              mainImage\n              name\n              quantity\n              price\n            }\n          }\n        }\n      }\n    }\n    delivery_request_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getDeliveryRequestByPK($id: uuid!) {\n    delivery_request(where: { id: { _eq: $id } }) {\n      ...DeliveryRequestFields\n      delivery_request_orders {\n        id\n        order_id\n        order {\n          id\n          order_items {\n            id\n            product {\n              id\n              description\n              discount\n              inStock\n              mainImage\n              name\n              quantity\n              price\n            }\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  \n  query getDeliveryRequestByPK($id: uuid!) {\n    delivery_request(where: { id: { _eq: $id } }) {\n      ...DeliveryRequestFields\n      delivery_request_orders {\n        id\n        order_id\n        order {\n          id\n          order_items {\n            id\n            product {\n              id\n              description\n              discount\n              inStock\n              mainImage\n              name\n              quantity\n              price\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getDeliveryRequestByCourier($courier_id: uuid!) {\n    delivery_request(where: { courierId: { _eq: $courier_id } }) {\n      ...DeliveryRequestFields\n    }\n  }\n"
): (typeof documents)["\n  \n  query getDeliveryRequestByCourier($courier_id: uuid!) {\n    delivery_request(where: { courierId: { _eq: $courier_id } }) {\n      ...DeliveryRequestFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query fetchSahilZones {\n    locations {\n      id\n    }\n  }\n"
): (typeof documents)["\n  query fetchSahilZones {\n    locations {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment OrderCoreFields on orders {\n    id\n    created_at\n    destination\n    customerId\n    origin\n    status\n  }\n"
): (typeof documents)["\n  fragment OrderCoreFields on orders {\n    id\n    created_at\n    destination\n    customerId\n    origin\n    status\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment OrderBusinessFields on business {\n    id\n    contactName\n    phoneNumber\n    name\n  }\n"
): (typeof documents)["\n  fragment OrderBusinessFields on business {\n    id\n    contactName\n    phoneNumber\n    name\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment OrderItemsAggregate on orders {\n    order_items_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n"
): (typeof documents)["\n  fragment OrderItemsAggregate on orders {\n    order_items_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment LatestStatusHistory on orders {\n    status_histories(limit: 1, order_by: { created_at: desc }) {\n      created_at\n      status\n    }\n  }\n"
): (typeof documents)["\n  fragment LatestStatusHistory on orders {\n    status_histories(limit: 1, order_by: { created_at: desc }) {\n      created_at\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment AllStatusHistories on orders {\n    status_histories(order_by: { created_at: desc }) {\n      status\n      created_at\n    }\n  }\n"
): (typeof documents)["\n  fragment AllStatusHistories on orders {\n    status_histories(order_by: { created_at: desc }) {\n      status\n      created_at\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  \n  \n  query getOrders {\n    orders {\n      ...OrderCoreFields\n      ...LatestStatusHistory\n      business {\n        ...OrderBusinessFields\n      }\n    }\n    orders_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"
): (typeof documents)["\n  \n  \n  \n  query getOrders {\n    orders {\n      ...OrderCoreFields\n      ...LatestStatusHistory\n      business {\n        ...OrderBusinessFields\n      }\n    }\n    orders_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  \n  \n  \n  query getOrderByPK($id: uuid!) {\n    orders_by_pk(id: $id) {\n      ...OrderCoreFields\n      ...OrderItemsAggregate\n      ...AllStatusHistories\n      business {\n        ...OrderBusinessFields\n      }\n      order_items {\n        id\n        product {\n          id\n          name\n          quantity\n          price\n        }\n      }\n      agent {\n        name\n      }\n    }\n  }\n"
): (typeof documents)["\n  \n  \n  \n  \n  query getOrderByPK($id: uuid!) {\n    orders_by_pk(id: $id) {\n      ...OrderCoreFields\n      ...OrderItemsAggregate\n      ...AllStatusHistories\n      business {\n        ...OrderBusinessFields\n      }\n      order_items {\n        id\n        product {\n          id\n          name\n          quantity\n          price\n        }\n      }\n      agent {\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query getOrderDeliveries($orderId: uuid!) {\n    delivery {\n      status\n      id\n      created_at\n      courierId\n    }\n  }\n"
): (typeof documents)["\n  query getOrderDeliveries($orderId: uuid!) {\n    delivery {\n      status\n      id\n      created_at\n      courierId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query getOrdersStats($startDate: timestamptz, $endDate: timestamptz) {\n    orders_aggregate(\n      where: { created_at: { _gte: $startDate, _lte: $endDate } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"
): (typeof documents)["\n  query getOrdersStats($startDate: timestamptz, $endDate: timestamptz) {\n    orders_aggregate(\n      where: { created_at: { _gte: $startDate, _lte: $endDate } }\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment ProductFields on products {\n    discount\n    id\n    name\n    price\n  }\n"
): (typeof documents)["\n  fragment ProductFields on products {\n    discount\n    id\n    name\n    price\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment ProductsAggregate on products_aggregate {\n    aggregate {\n      count(columns: id, distinct: true)\n    }\n  }\n"
): (typeof documents)["\n  fragment ProductsAggregate on products_aggregate {\n    aggregate {\n      count(columns: id, distinct: true)\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  \n  query getProducts($offset: Int = 0, $limit: Int = 12) {\n    products(limit: $limit, order_by: { created_at: desc }, offset: $offset) {\n      ...ProductFields\n      mainImage\n      description\n    }\n    products_aggregate {\n      ...ProductsAggregate\n    }\n  }\n"
): (typeof documents)["\n  \n  \n  query getProducts($offset: Int = 0, $limit: Int = 12) {\n    products(limit: $limit, order_by: { created_at: desc }, offset: $offset) {\n      ...ProductFields\n      mainImage\n      description\n    }\n    products_aggregate {\n      ...ProductsAggregate\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  \n  \n  query getProductsByName(\n    $offset: Int = 0\n    $limit: Int = 12\n    $name: String = ""\n  ) {\n    products(\n      limit: $limit\n      order_by: { created_at: desc }\n      offset: $offset\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      ...ProductFields\n    }\n    products_aggregate(\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      ...ProductsAggregate\n    }\n  }\n'
): (typeof documents)['\n  \n  \n  query getProductsByName(\n    $offset: Int = 0\n    $limit: Int = 12\n    $name: String = ""\n  ) {\n    products(\n      limit: $limit\n      order_by: { created_at: desc }\n      offset: $offset\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      ...ProductFields\n    }\n    products_aggregate(\n      where: { inStock: { _eq: true }, name: { _ilike: $name } }\n    ) {\n      ...ProductsAggregate\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment SupplierFields on suppliers {\n    id\n    name\n    streetAddress\n    phoneNumber\n    contactName\n    zone\n    categories {\n      category_name\n    }\n  }\n"
): (typeof documents)["\n  fragment SupplierFields on suppliers {\n    id\n    name\n    streetAddress\n    phoneNumber\n    contactName\n    zone\n    categories {\n      category_name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment SupplierProductFields on products {\n    id\n    name\n    description\n    inStock\n    quantity\n    price\n  }\n"
): (typeof documents)["\n  fragment SupplierProductFields on products {\n    id\n    name\n    description\n    inStock\n    quantity\n    price\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getSuppliers($offset: Int = 0, $limit: Int = 10) {\n    suppliers(offset: $offset, limit: $limit) {\n      ...SupplierFields\n    }\n    suppliers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"
): (typeof documents)["\n  \n  query getSuppliers($offset: Int = 0, $limit: Int = 10) {\n    suppliers(offset: $offset, limit: $limit) {\n      ...SupplierFields\n    }\n    suppliers_aggregate {\n      aggregate {\n        count(columns: id, distinct: true)\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query getSupplierOrders($supplierId: uuid) {\n    order_supplier(\n      where: { supplierId: { _eq: $supplierId } }\n      distinct_on: supplierId\n    ) {\n      id\n      supplierId\n      order {\n        id\n        created_at\n        destination\n        id\n        customerId\n        origin\n        status\n        business {\n          contactName\n          phoneNumber\n          name\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query getSupplierOrders($supplierId: uuid) {\n    order_supplier(\n      where: { supplierId: { _eq: $supplierId } }\n      distinct_on: supplierId\n    ) {\n      id\n      supplierId\n      order {\n        id\n        created_at\n        destination\n        id\n        customerId\n        origin\n        status\n        business {\n          contactName\n          phoneNumber\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getFilteredSuppliers(\n    $category_name: supplier_categories_enum_enum\n    $offset: Int = 0\n    $limit: Int = 10\n  ) {\n    suppliers(\n      where: { categories: { category_name: { _eq: $category_name } } }\n      offset: $offset\n      limit: $limit\n    ) {\n      ...SupplierFields\n    }\n  }\n"
): (typeof documents)["\n  \n  query getFilteredSuppliers(\n    $category_name: supplier_categories_enum_enum\n    $offset: Int = 0\n    $limit: Int = 10\n  ) {\n    suppliers(\n      where: { categories: { category_name: { _eq: $category_name } } }\n      offset: $offset\n      limit: $limit\n    ) {\n      ...SupplierFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getSupplierByPK($id: uuid!) {\n    suppliers_by_pk(id: $id) {\n      ...SupplierFields\n      created_at\n      description\n      contactEmail\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n      schedule {\n        id\n        days\n        shifts {\n          id\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  \n  query getSupplierByPK($id: uuid!) {\n    suppliers_by_pk(id: $id) {\n      ...SupplierFields\n      created_at\n      description\n      contactEmail\n      products_aggregate {\n        aggregate {\n          count\n        }\n      }\n      schedule {\n        id\n        days\n        shifts {\n          id\n          start_time\n          end_time\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getSupplierProducts(\n    $id: uuid!\n    $offset: Int = 0\n    $limit: Int = 4\n    $order_by: [products_order_by!] = { name: asc }\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id } }\n      limit: $limit\n      offset: $offset\n      order_by: $order_by\n    ) {\n      ...SupplierProductFields\n      mainImage\n    }\n  }\n"
): (typeof documents)["\n  \n  query getSupplierProducts(\n    $id: uuid!\n    $offset: Int = 0\n    $limit: Int = 4\n    $order_by: [products_order_by!] = { name: asc }\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id } }\n      limit: $limit\n      offset: $offset\n      order_by: $order_by\n    ) {\n      ...SupplierProductFields\n      mainImage\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  \n  query getSupplierProductByName(\n    $id: uuid!\n    $offset: Int = 0\n    $name: String = ""\n    $limit: Int = 4\n    $order_by: [products_order_by!] = { name: asc }\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id }, name: { _ilike: $name } }\n      limit: $limit\n      offset: $offset\n      order_by: $order_by\n    ) {\n      ...SupplierProductFields\n    }\n  }\n'
): (typeof documents)['\n  \n  query getSupplierProductByName(\n    $id: uuid!\n    $offset: Int = 0\n    $name: String = ""\n    $limit: Int = 4\n    $order_by: [products_order_by!] = { name: asc }\n  ) {\n    products(\n      where: { supplier_id: { _eq: $id }, name: { _ilike: $name } }\n      limit: $limit\n      offset: $offset\n      order_by: $order_by\n    ) {\n      ...SupplierProductFields\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query getSupplierCategories @cached {\n    supplier_categories_enum {\n      name\n    }\n  }\n"
): (typeof documents)["\n  query getSupplierCategories @cached {\n    supplier_categories_enum {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment UserBasicFields on users {\n    id\n    name\n    role\n  }\n"
): (typeof documents)["\n  fragment UserBasicFields on users {\n    id\n    name\n    role\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment UserAuthFields on users {\n    email\n    role\n  }\n"
): (typeof documents)["\n  fragment UserAuthFields on users {\n    email\n    role\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment UserInviteFields on user_invites {\n    id\n    email\n    name\n    role\n  }\n"
): (typeof documents)["\n  fragment UserInviteFields on user_invites {\n    id\n    email\n    name\n    role\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getUsers {\n    users {\n      ...UserBasicFields\n      created_at\n    }\n  }\n"
): (typeof documents)["\n  \n  query getUsers {\n    users {\n      ...UserBasicFields\n      created_at\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query getUserByEmail($email: String!) {\n    users(where: { email: { _eq: $email } }) {\n      ...UserAuthFields\n      name\n    }\n  }\n"
): (typeof documents)["\n  \n  query getUserByEmail($email: String!) {\n    users(where: { email: { _eq: $email } }) {\n      ...UserAuthFields\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query getAdditionalAuthUserInfo($id: uuid = "") {\n    users_by_pk(id: $id) {\n      hasCompletedOnboarding\n      role\n    }\n  }\n'
): (typeof documents)['\n  query getAdditionalAuthUserInfo($id: uuid = "") {\n    users_by_pk(id: $id) {\n      hasCompletedOnboarding\n      role\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  \n  query getUserInvites($email: String = "") {\n    user_invites(\n      where: { email: { _eq: $email } }\n      limit: 1\n      order_by: { created_at: desc }\n    ) {\n      ...UserInviteFields\n    }\n  }\n'
): (typeof documents)['\n  \n  query getUserInvites($email: String = "") {\n    user_invites(\n      where: { email: { _eq: $email } }\n      limit: 1\n      order_by: { created_at: desc }\n    ) {\n      ...UserInviteFields\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment ZoneFields on zones {\n    id\n    name\n    description\n    created_at\n    updated_at\n  }\n"
): (typeof documents)["\n  fragment ZoneFields on zones {\n    id\n    name\n    description\n    created_at\n    updated_at\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query GetZones {\n    zones {\n      ...ZoneFields\n    }\n  }\n"
): (typeof documents)["\n  \n  query GetZones {\n    zones {\n      ...ZoneFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  \n  query GetZonesById($id: uuid!) {\n    zones(where: { id: { _eq: $id } }) {\n      ...ZoneFields\n    }\n  }\n"
): (typeof documents)["\n  \n  query GetZonesById($id: uuid!) {\n    zones(where: { id: { _eq: $id } }) {\n      ...ZoneFields\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
