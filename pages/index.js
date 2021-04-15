import Head from "next/head";
import { SITE_NAME } from "@config";

const Home = () => (
  <>
    <Head>
      <title>{SITE_NAME} | Accueil</title>
    </Head>
    <h1>Accueil</h1>
  </>
);

export default Home;
