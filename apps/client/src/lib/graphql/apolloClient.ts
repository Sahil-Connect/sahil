import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
const isBrowser = typeof window !== 'undefined';

type HttpOptions = {
  headers?: {
    Authorization?: string;
    'x-hasura-admin-secret'?: string;
    'x-hasura-role'?: string;
  };
  token?: string;
};

const createLink = (opts: HttpOptions = {}) => {
  return createHttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT,
    credentials: 'include',
    headers: {
      ...opts.headers,
      'x-hasura-admin-secret': process.env
        .NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET as string,
    },
  });
};

const httpLink = createLink({
  headers: {
    'x-hasura-admin-secret': process.env
      .NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET as string,
  },
});

interface Options {
  token?: string;
}

function create(initialState: any, options: Options = {}) {
  const client = new ApolloClient({
    connectToDevTools: !isBrowser,
    ssrMode: isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: httpLink,
    cache: new InMemoryCache().restore(initialState || {}),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
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
