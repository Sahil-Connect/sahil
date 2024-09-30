import { gql } from "@apollo/client";

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
  }
`;

export const FETCH_DELIVERIES = gql`
  ${DELIVERY_FIELDS}
  query getDeliveries {
    delivery {
      ...DeliveryFields
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
    delivery(where: {id: {_eq: $id}}) {
      ...DeliveryFields
    }
  }
`;  

export const FETCH_DELIVERIES_BY_COURIER = gql`
  ${DELIVERY_FIELDS}
  query getDeliveriesByCourier($courier_id: uuid!) {
    delivery(where: {courierId: {_eq: $courier_id}}) {
      ...DeliveryFields
    }
  }
`;  

export const FETCH_DELIVERY_REQUESTS = gql`
  ${DELIVERY_REQUEST_FIELDS}
  query getDeliveryRequests {
    delivery_request {
      ...DeliveryRequestFields
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
    delivery_request(where: {id: {_eq: $id}}) {
      ...DeliveryRequestFields
    }
  }
`;

export const FETCH_DELIVERY_REQUEST_BY_COURIER = gql`
  ${DELIVERY_REQUEST_FIELDS}
  query getDeliveryRequestByCourier($courier_id: uuid!) {
    delivery_request(where: {courierId: {_eq: $courier_id}}) {
      ...DeliveryRequestFields
    }
  }
`;