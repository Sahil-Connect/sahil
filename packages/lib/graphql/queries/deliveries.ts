import { gql } from "@apollo/client";

export const FETCH_DELIVERIES = gql`
  query getDeliveries {
    delivery {
      id
      created_at
    }
    delivery_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;

export const FETCH_DELIVERY_BY_PK = gql`
  query getDeliveryByPK($id: uuid!) {
    delivery(where: {id: {_eq: $id}}) {
      id
      created_at
    }
  }
`;  


export const FETCH_DELIVERIES_BY_COURIER = gql`
  query getDeliveriesByCourier($courier_id: uuid!) {
    delivery(where: {courier_id: {_eq: $courier_id}}) {
      id
      created_at
    }
  }
`;  


export const FETCH_DELIVERY_REQUESTS = gql`
  query getDeliveryRequests {
    delivery_request {
      id
      created_at
    }
    delivery_request_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`; 

export const FETCH_DELIVERY_REQUEST_BY_PK = gql`
  query getDeliveryRequestByPK($id: uuid!) {
    delivery_request(where: {id: {_eq: $id}}) {
      id
      created_at
    }
  }
`;

export const FETCH_DELIVERY_REQUEST_BY_COURIER = gql`
  query getDeliveryRequestByCourier($courier_id: uuid!) {
    delivery_request(where: {courier_id: {_eq: $courier_id}}) {
      id
      created_at
    }
  }
`;