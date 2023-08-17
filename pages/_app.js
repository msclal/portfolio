import "../styles/globals.css";
import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageview } from "../lib/ga";

/* eslint-disable camelcase */
import { Inter } from "next/font/google";
// import { Outfit } from "next/font/google";
// import { Noto_Sans } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

/* eslint-disable new-cap */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const outfit = Outfit({
//   subsets: ["latin"],
//   variable: "--font-outfit",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// const notoSans = Noto_Sans({
//   subsets: ["latin"],
//   variable: "--font-notoSans",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-robotoMono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <main className={`${inter.variable} ${robotoMono.variable} `}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
