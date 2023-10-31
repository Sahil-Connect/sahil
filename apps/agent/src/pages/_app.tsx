import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/graphql/apolloClient";
import { SessionProvider } from "next-auth/react";
import Layout from "@/Layout/layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
    <ApolloProvider client={client}>
      <Layout><Component {...pageProps} /></Layout>
    </ApolloProvider>
    </SessionProvider>
  );
}
