import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/Layout/layout";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout><Component {...pageProps} /></Layout>
    </ApolloProvider>
  );
}
