import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Mika Shanela</title>
      {/* <meta name="title" property="og:title" content="Home" /> */}
      <meta
        name="description"
        property="og:description"
        content="Home page for Mika Shanela's portfolio site!"
      />
      <meta name="image" property="og:image" content="/assets/gude.png" />
      <meta name="type" property="og:type" content="website" />
      <meta name="locale" property="og:locale" content="en_IE" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        property="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta name="robots" content="index,follow"></meta>
      {/* <Head />
      <title>Mika Shanela</title>
      <meta property="og:title" content="Home" />
      <meta
        name="description"
        content="Home page for Mika Shanela's portfolio site!"
      />
      <meta property="og:image" content="/assets/egg.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IE" />
      <meta name="robots" content="index,follow" /> */}
      <link rel="icon" href="/assets/gude.png" />

      {/* <!-- Google tag (gtag.js) --> */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
            });
            `,
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
