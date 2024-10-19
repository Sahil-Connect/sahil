import { gql } from "@apollo/client";
// import { OrderCoreFiel}

export const DELIVERY_FIELDS = gql`
  fragment DeliveryFields on delivery {
    id
    created_at
  }
`;

export const DELIVERY_REQUEST_FIELDS = gql`
  fragment DeliveryRequestFields on delivery_request {
    id
    created_at
    delivery_method
    status
    courierId
    created_at
    updated_at
  }
`;

export const FETCH_DELIVERIES = gql`
  ${DELIVERY_FIELDS}
  query getDeliveries {
    delivery {
      ...DeliveryFields
      order {
      customerId
      created_at
      order_items {
        product {
          created_at
          description
          discount
          name
          price
          quantity
          inStock
        }
      }
    }
    }
    delivery_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;

export const FETCH_DELIVERY_BY_PK = gql`
  ${DELIVERY_FIELDS}
  query getDeliveryByPK($id: uuid!) {
    delivery(where: { id: { _eq: $id } }) {
      ...DeliveryFields
      order {
      customerId
      created_at
      status
      order_items {
        product {
          created_at
          description
          discount
          name
          price
          quantity
          inStock
        }
      }
    }
    }
  }
`;

export const FETCH_DELIVERIES_BY_COURIER = gql`
  ${DELIVERY_FIELDS}
  query getDeliveriesByCourier($courier_id: uuid!) {
    delivery(where: { courierId: { _eq: $courier_id } }) {
      ...DeliveryFields
      order {
      customerId
      created_at
      order_items {
        product {
          created_at
          description
          discount
          name
          price
          quantity
          inStock
        }
      }
    }
    }
  }
`;

export const FETCH_DELIVERY_REQUESTS = gql`
  ${DELIVERY_REQUEST_FIELDS}
  query getDeliveryRequests {
    delivery_request {
      ...DeliveryRequestFields
      delivery_request_orders {
        id
        order_id
        order {
          id
          order_items {
            id
            product {
              id
              description
              discount
              inStock
              mainImage
              name
              quantity
              price
            }
          }
        }
      }
    }
    delivery_request_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;

export const FETCH_DELIVERY_REQUEST_BY_PK = gql`
  ${DELIVERY_REQUEST_FIELDS}
  query getDeliveryRequestByPK($id: uuid!) {
    delivery_request(where: { id: { _eq: $id } }) {
      ...DeliveryRequestFields
      delivery_request_orders {
        id
        order_id
        order {
          id
          order_items {
            id
            product {
              id
              description
              discount
              inStock
              mainImage
              name
              quantity
              price
            }
          }
        }
      }
    }
  }
`;

export const FETCH_DELIVERY_REQUEST_BY_COURIER = gql`
  ${DELIVERY_REQUEST_FIELDS}
  query getDeliveryRequestByCourier($courier_id: uuid!) {
    delivery_request(where: { courierId: { _eq: $courier_id } }) {
      ...DeliveryRequestFields
    }
  }
`;
