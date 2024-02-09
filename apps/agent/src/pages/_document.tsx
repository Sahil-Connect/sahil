import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sen&family=Plus+Jakarta+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-medium min-h-full leading-normal">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
