import Head from "next/head";
import { Header } from "@components";

const SiteLayout = ({ children }) => (
  <>
    <Head>
      <title>Buldidé</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="ctn pt-16">{children}</main>
  </>
);

export default SiteLayout;
