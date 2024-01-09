import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client';

const isBrowser = typeof window !== 'undefined';

type HttpOptions = {
  headers?: {
    Authorization?: string;
    'x-hasura-admin-secret'?: string;
    'x-hasura-role'?: string;
  };
  token?: string;
};

interface ApolloClientOptions {
  uri: string;
  httpOptions: HttpOptions;
}

export const createApolloClient = ({
  uri,
  httpOptions,
}: ApolloClientOptions): ApolloClient<NormalizedCacheObject> => {
  const initialState: Record<string, any> = {};
  const link = createHttpLink({
    uri,
    credentials: 'include',
    headers: {
      ...httpOptions.headers,
      'x-hasura-admin-secret':
        httpOptions.headers?.['x-hasura-admin-secret'] || '',
    },
  });

  const client = new ApolloClient({
    connectToDevTools: !isBrowser,
    ssrMode: isBrowser,
    link,
    cache: new InMemoryCache().restore(initialState || {}),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });

  if (!isBrowser) {
    client.setLink(link);
  }

  return client;
};
