import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    NormalizedCacheObject,
  } from "@apollo/client";
  import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
  import { split } from "@apollo/client";
  import { getMainDefinition } from "@apollo/client/utilities";
  import { onError } from "@apollo/client/link/error";
  import { createClient } from "graphql-ws";
  
  let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
  const isBrowser = typeof window !== "undefined";
  
  type HttpOptions = {
    headers?: {
      Authorization?: string;
      "x-hasura-admin-secret"?: string;
      "x-hasura-role"?: string;
    };
    token?: string;
  };
  
  const createLink = (opts: HttpOptions = {}) => {
    return createHttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT,
      credentials: "include",
      headers: {
        ...opts.headers,
        "x-hasura-admin-secret":
          process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
        "x-hasura-role": "user",
        Authorization: "secret",
      },
    });
  };
  
  const httpLink = createLink({
    headers: {
      "x-hasura-admin-secret":
        process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
      "x-hasura-role": "user",
    },
  });
  
  const wsLink = isBrowser
    ? new GraphQLWsLink(
        createClient({
          url: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_WS || "localhost:3000",
          connectionParams: {
            headers: {
              "x-hasura-admin-secret":
                process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
              Authorization: "secret",
              "x-hasura-role": "user",
            },
          },
        })
      )
    : httpLink;
  
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
        httpLink
      )
    : httpLink;
  
  interface Options {
    token?: string;
  }
  
  function create(initialState: any, options: Options = {}) {
    const client = new ApolloClient({
      connectToDevTools: !isBrowser,
      ssrMode: isBrowser, // Disables forceFetch on the server (so queries are only run once)
      link: splitLink,
      cache: new InMemoryCache().restore(initialState || {}),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-and-network",
        },
      },
    });
  
    if (!isBrowser) {
      client.setLink(httpLink);
    }
  
    return client;
  }
  
  export default function initApollo(
    initialState: Record<string, any> = {},
    options?: Options
  ) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!isBrowser) {
      return create(initialState, options);
    }
    // Reuse client on the client-side
    if (!apolloClient) {
      apolloClient = create(initialState, options);
    }
  
    return apolloClient;
  }
  
  export const client = initApollo();