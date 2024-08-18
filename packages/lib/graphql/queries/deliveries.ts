import { gql } from "@apollo/client";

export const FETCH_DELIVERIES = gql`
  query getDeliveries {
    deliveries {
      id
      courier_id
      courier_name
      courier_phoneNumber
      courier_email
      courier_gender
      courier_avatar
      delivery_date
      delivery_time
      status
      tracking_number
      address
      city
      state
      zip
      country
      created_at
      updated_at
    }
    deliveries_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;

export const FETCH_DELIVERY_BY_PK = gql`
  query getDeliveryByPK($id: uuid!) {
    deliveries_by_pk(id: $id) {
      id
      courier_id
      courier_name
      courier_phoneNumber
      courier_email
      courier_gender
      courier_avatar
      delivery_date
      delivery_time
      status
      tracking_number
      address
      city
      state
      zip
      country
      created_at
      updated_at
    }
  }
`;  


export const FETCH_DELIVERIES_BY_COURIER = gql`
  query getDeliveriesByCourier($courier_id: uuid!) {
    deliveries(where: {courier_id: {_eq: $courier_id}}) {
      id
      courier_id
      courier_name
      courier_phoneNumber
      courier_email
      courier_gender
      courier_avatar
      delivery_date
      delivery_time
      status
      tracking_number
      address
      city
      state
      zip
      country
      created_at
      updated_at
    }
  }
`;  


export const FETCH_DELIVERY_REQUESTS = gql`
  query getDeliveryRequests {
    delivery_requests {
      id
      courier_id
      courier_name
      courier_phoneNumber
      courier_email
      courier_gender
      courier_avatar
      delivery_date
      delivery_time
      status
      tracking_number
      address
      city
      state
      zip
      country
      created_at
      updated_at
    }
    delivery_requests_aggregate {
      aggregate {
        count(columns: id, distinct: true)
      }
    }
  }
`;  

export const FETCH_DELIVERY_REQUEST_BY_COURIER = gql`
  query getDeliveryRequestByCourier($courier_id: uuid!) {
    delivery_requests(where: {courier_id: {_eq: $courier_id}}) {
      id
      courier_id
      courier_name
      courier_phoneNumber
      courier_email
      courier_gender
      courier_avatar
      delivery_date
      delivery_time
      status
      tracking_number
      address
      city
      state
      zip
      country
      created_at
      updated_at
    }
  }
`;