import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Mika Shanela</title>
      <meta
        name="description"
        content="Check out Mika Shanela's portfolio site!"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow"></meta>
      <link rel="icon" href="/assets/head.png" />
      <body>
        <Main />x
        <NextScript />
      </body>
    </Html>
  );
}
