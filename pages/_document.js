import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <title>Mika Shanela</title>
      <meta
        name="description"
        content="Check out Mika Shanela's portfolio site!"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow"></meta> */}
      <meta property="og:site_name" content="Mika Shanela" />
      <meta
        name="description"
        content="Home page for Mika Shanela's portfolio site!"
      />
      <meta name="viewport" content="width=device-width" />
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IE" />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content="Home" />
      <meta name="next-head-count" content="10" /> {/* </head> */}
      <link rel="icon" href="/assets/head.png" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
