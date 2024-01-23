# Sahil

## Overview

Sahil is a platform that connects businesses with suppliers and customers, streamlining the procurement and distribution of goods. It offers a centralized and well-managed supply chain solution customized for small businesses.

## Objectives

- **Enable Easy Supplier Connections:** Sahil simplifies the process of connecting businesses with reliable suppliers, reducing procurement challenges and enhancing supply chain efficiency.
- **Amplify Online Presence:** Sahil empowers small businesses to establish an online footprint, increasing their visibility and reach among potential customers.
- **Utilize Location Mapping:** By integrating with mapping services, Sahil leverages location-specific data to derive valuable insights for businesses.
- **Comprehensive Business Directory:** Sahil creates a comprehensive business directory accessible to various stakeholders, including local governments, investors, entrepreneurs, and customers. This directory provides valuable data about industry growth, demographics, locations, and more, offering insights into economic trends and business activities.
- **Seamless Order Management:** Sahil enables businesses to receive and manage customer orders seamlessly, improving order processing and customer satisfaction.
- **Local Job Creation:** Sahil generates employment opportunities for agents, delivery personnel, and customer success management, contributing to local job creation.

## Core Features

Sahil's implementation revolves around the creation of an intuitive mobile application accessible through diverse channels, including agent-assisted registration, app-based sign-up, and USSD codes.

### User Registration and Preferences

Users can register on Sahil through three different methods:

### Agent-Assisted Registration

- Establish physical locations, such as local shops or community centers, where agents can assist users with registration.

### App-Based Registration

- Develop a user-friendly app that employs intuitive visuals and minimal text to accommodate users with varying literacy levels.

### USSD Code Registration

- Implement a USSD (Unstructured Supplementary Service Data) code system that allows users to register and set preferences using simple numeric codes on their mobile phones.

### Supplier-Customer Interaction and Supply Chain Establishment

Sahil facilitates the establishment of a robust supply chain by enabling businesses to connect with suitable suppliers. The app employs an advanced algorithm to match businesses with suppliers based on user requirements and supplier inventory. Here's how it works:

### Algorithm for Supplier Matching

1. Product Availability and User Specifications: The app uses the user's order details, including the quantity and type of items, to search for suppliers that match the requested products.
2. Priority for Suppliers with Full Order Fulfillment: The algorithm gives priority to suppliers who can fulfill the entire order, ensuring maximum efficiency in the supply chain.
3. Two-step Matching Process:
    - First Priority: Suppliers who can fulfill the entire order are given the highest priority.
    - Second Priority: If no single supplier can fulfill the entire order, the algorithm considers suppliers who can provide partial quantities.

### Implementation Details

To ensure a seamless user experience and efficient supply chain management, the following features are implemented:

### Search for Suitable Suppliers

The app utilizes the user's order details to search for suppliers that match the requested products. By considering factors such as quantity and type of items, the app identifies the most suitable suppliers for each order.

### Supplier Inventory Tracking

To provide accurate information to users, Sahil keeps track of each supplier's available inventory for specific items. This ensures that only available items are suggested to users, preventing any inconvenience or delays in the procurement process.

### Matching Criteria

When a user places an order, the app prioritizes suppliers based on their ability to fulfill the entire order. The matching criteria are as follows:

1. First Priority: Identify suppliers who can fulfill the entire order and prioritize them. This ensures that orders are efficiently processed without the need for multiple suppliers.
2. Second Priority: If no single supplier can fulfill the entire order, the app considers suppliers who can provide partial quantities. This allows users to receive as much of their requested items as possible.

These features collectively enhance supplier-customer interaction and streamline the establishment of a reliable supply chain within Sahil's platform.

### Delivery and Distribution

Users have the option to choose between pick-up locations and physical addresses for order delivery.

### Pick-Up Locations

- A predefined list of community pick-up locations.
- Confirmation and notifications for selected pick-up locations.
- Coordination with pick-up location agents.

### Physical Addresses

- User input for specific delivery addresses.
- Address verification and validation.
- Selection and communication of a delivery time window.

# Development

## DevOps

### Local dev env for hasura

```
docker compose up -d sahil-hasura-local-dev
```

```
docker compose down sahil-hasura-local-dev sahil-pgdb hasura-data-connector
```

### Local dev env for API

```
docker compose up -d sahil-api-local-dev
```

```
docker compose down sahil-api-local-dev sahil-pgdb
```

### Run the apps locally with Docker

```
docker compose up -d [SERVICE] eg. sahil-website, sahil-agent, sahil-api
```
