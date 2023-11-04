import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/Layout/layout";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
