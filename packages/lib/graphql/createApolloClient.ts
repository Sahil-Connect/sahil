import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const isBrowser = typeof window !== "undefined";

type HttpOptions = {
  headers?: {
    Authorization?: string;
    "x-hasura-admin-secret"?: string;
    "x-hasura-role"?: string;
  };
};

interface ApolloClientOptions {
  uri: string; // HTTP endpoint for GraphQL
  httpOptions: HttpOptions; // HTTP headers for requests
  ws?: string; // WebSocket endpoint for subscriptions
}

export const createApolloClient = ({
  uri,
  httpOptions,
  ws = "ws://localhost:3000", // Default WebSocket URL
}: ApolloClientOptions): ApolloClient<NormalizedCacheObject> => {
  const initialState: Record<string, any> = {};

  // Create HTTP link for queries/mutations
  const httpLink = createHttpLink({
    uri,
    credentials: "include", // Include cookies in requests
    headers: {
      ...httpOptions.headers,
      "x-hasura-admin-secret": httpOptions.headers?.["x-hasura-admin-secret"] || "",
    },
  });

  // Create WebSocket link for subscriptions (only in the browser)
  const wsLink = isBrowser
    ? new GraphQLWsLink(
        createClient({
          url: ws,
          connectionParams: {
            headers: {
              ...httpOptions.headers,
              Authorization: httpOptions.headers?.Authorization || "Bearer secret",
              "x-hasura-role": httpOptions.headers?.["x-hasura-role"] || "admin",
            },
          },
        })
      )
    : null;

  // Split traffic between subscriptions and queries/mutations
  const splitLink = isBrowser && wsLink
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

  // Initialize Apollo Client
  const client = new ApolloClient({
    connectToDevTools: isBrowser, // Enable DevTools in the browser
    ssrMode: !isBrowser, // Enable SSR mode on the server
    link: splitLink,
    cache: new InMemoryCache().restore(initialState),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network", // Fetch from network while updating cache
      },
    },
  });

  // Explicitly set link for SSR environments
  if (!isBrowser) {
    client.setLink(httpLink);
  }

  return client;
};
