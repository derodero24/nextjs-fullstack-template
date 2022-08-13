import { Head, Html, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
