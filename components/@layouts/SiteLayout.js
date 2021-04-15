import Head from "next/head";
import Header from "@components/Header";

const SiteLayout = ({ children }) => (
  <>
    <Head>
      <title>Buldidé</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="_container relative top-16">{children}</main>
  </>
);

export default SiteLayout;
