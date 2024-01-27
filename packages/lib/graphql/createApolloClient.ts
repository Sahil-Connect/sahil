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
  token?: string;
};

interface ApolloClientOptions {
  uri: string;
  httpOptions: HttpOptions;
  ws: string;
}

export const createApolloClient = ({
  uri,
  httpOptions,
  ws,
}: ApolloClientOptions): ApolloClient<NormalizedCacheObject> => {
  const initialState: Record<string, any> = {};

  const link = createHttpLink({
    uri,
    credentials: "include",
    headers: {
      ...httpOptions.headers,
      "x-hasura-admin-secret":
        httpOptions.headers?.["x-hasura-admin-secret"] || "",
    },
  });

  const wsLink = isBrowser
    ? new GraphQLWsLink(
        createClient({
          url: ws || "localhost:3000",
          connectionParams: {
            headers: {
              ...httpOptions.headers,
              "x-hasura-admin-secret":
                httpOptions.headers?.["x-hasura-admin-secret"] || "",
              Authorization: "secret",
              "x-hasura-role": "admin",
            },
          },
        })
      )
    : link;

  const splitLink = isBrowser
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        link
      )
    : link;

  const client = new ApolloClient({
    connectToDevTools: !isBrowser,
    ssrMode: isBrowser,
    link: splitLink,
    cache: new InMemoryCache().restore(initialState || {}),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });

  if (!isBrowser) {
    client.setLink(link);
  }

  return client;
};
