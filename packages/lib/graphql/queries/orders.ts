import { gql } from '@apollo/client';

export const ORDER_CORE_FIELDS = gql`
  fragment OrderCoreFields on orders {
    id
    created_at
    destination
    customerId
    origin
    status
  }
`;

export const ORDER_BUSINESS_FIELDS = gql`
  fragment OrderBusinessFields on business {
    contactName
    phoneNumber
    name
  }
`;

export const ORDER_ITEMS_AGGREGATE = gql`
  fragment OrderItemsAggregate on orders {
    order_items_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const FETCH_ORDERS = gql`
  ${ORDER_CORE_FIELDS}
  ${ORDER_BUSINESS_FIELDS}
  query getOrders {
    orders {
      ...OrderCoreFields
      business {
        ...OrderBusinessFields
      }
    }
    orders_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;

export const FETCH_ORDER_BY_PK = gql`
  ${ORDER_CORE_FIELDS}
  ${ORDER_ITEMS_AGGREGATE}
  query getorderByPK($id: uuid!) {
    orders_by_pk(id: $id) {
      ...OrderCoreFields
      ...OrderItemsAggregate
      order_items {
        id
        product {
          id
          name
          quantity
          price
        }
      }
      agent {
        name
      }
    }
  }
`;

export const FETCH_ORDER_DELIVERIES = gql`
  query getOrderDeliveries($orderId: uuid!) {
    delivery {
      status
      id
      created_at
      courierId
    }
  }
`;

export const FETCH_ORDERS_STATS = gql`
  query getOrdersStats($startDate: timestamptz, $endDate: timestamptz) {
    orders_aggregate(
      where: { created_at: { _gte: $startDate, _lte: $endDate } }
    ) {
      aggregate {
        count
      }
    }
  }
`;
