import { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '@/components/navbar/Navbar';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
