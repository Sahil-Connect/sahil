import {
  gql,
} from "@apollo/client";

export const FETCH_ORDERS = gql`
query getOrders {
    orders {
        created_at
        id
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
    orderId
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
    orderId
    status
    orderId
    id
    created_at
    courierId
  }
  }
`;