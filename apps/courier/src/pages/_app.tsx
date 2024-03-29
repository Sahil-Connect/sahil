import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@sahil/lib/graphql";
import Layout from "@/Layout/layout";

const graphqlUri = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT || "";
const ws = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_WS;

const httpOptions = {
  headers: {
    "x-hasura-admin-secret":
      process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
  },
};

const client = createApolloClient({
  uri: graphqlUri,
  httpOptions,
  ws: ws as string,
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
