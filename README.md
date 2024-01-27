# Sahil

Sahil functions as a platform linking businesses with suppliers and customers, facilitating automated procurement and distribution of goods. It establishes a centralized and well-managed supply chain solution tailored to the needs of small businesses.

## Core Features

### Registration and Preferences

Allow users to register and set their delivery preferences, including frequency and specific requirements.

#### Agents

#### Via the app

### Matching Process

Design an algorithm that matches businesses with suitable suppliers based on their specified requirements.

### Delivery Process

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
