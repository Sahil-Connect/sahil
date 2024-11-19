import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/Layout/layout";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@sahil/lib/graphql";
import { SessionProvider } from "next-auth/react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const graphqlUri = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT;
const ws = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_WS;

const httpOptions = {
  headers: {
    "x-hasura-admin-secret":
      process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
  },
};

const client = createApolloClient({
  uri: graphqlUri as string,
  httpOptions,
  ws: ws as string,
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <div
          className={`${inter.variable} ${jakarta.variable} font-inter antialiased text-zinc-900 min-h-full leading-normal`}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </ApolloProvider>
    </SessionProvider>
  );
}
