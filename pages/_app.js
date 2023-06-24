import "../styles/globals.css";
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";
// import { Outfit } from "next/font/google";
/* eslint-disable camelcase */
import { Noto_Sans } from "next/font/google";

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

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-notoSans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${notoSans.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
