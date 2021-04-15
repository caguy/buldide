import Head from "next/head";
import Header from "@components/Header";
import { SITE_NAME } from "@config";

const SiteLayout = ({ children }) => (
  <>
    <Head>
      <title>{SITE_NAME}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="_container relative top-16">{children}</main>
  </>
);

export default SiteLayout;
