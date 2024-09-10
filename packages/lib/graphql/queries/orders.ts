import { gql } from "@apollo/client";

export const FETCH_ORDERS = gql`
  query getOrders {
    orders {
      id
      created_at
      destination
      id
      customerId
      origin
      status
      business {
        contactName
        phoneNumber
        name
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
  query getorderByPK($id: uuid!) {
    orders_by_pk(id: $id) {
      id
      created_at
      destination
      id
      customerId
      origin
      status
      order_items {
        id
        product {
          id
          name
          quantity
          price
        }
      }
      status
      agent {
        name
      }
      order_items_aggregate {
        aggregate {
          count
        }
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
