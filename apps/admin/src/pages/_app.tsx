import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import Layout from "@/Layout/layout";
import { createApolloClient } from "@sahil/lib/graphql";

const graphqlUri = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT as string;
const ws = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_WS as string;

const httpOptions = {
  headers: {
    "x-hasura-admin-secret":
      process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
  },
};

const client = createApolloClient({
  uri: graphqlUri,
  httpOptions,
  ws: ws,
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </SessionProvider>
  );
}
