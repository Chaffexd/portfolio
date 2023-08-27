import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout className={OpenSans.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
