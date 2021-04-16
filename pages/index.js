import Head from "next/head";
import { SITE_NAME } from "@config";
import { useAppState } from "@context/hooks";

const Home = () => {
  const { user } = useAppState();

  return (
    <>
      <Head>
        <title>{SITE_NAME} | Accueil</title>
      </Head>
      {user.username ? <h1>Bonjour {user.username}</h1> : <h1>Accueil</h1>}
    </>
  );
};

export default Home;
