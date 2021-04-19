import { useSession } from "next-auth/client";
import Head from "next/head";
import { SITE_NAME } from "@config";

const Home = () => {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>{SITE_NAME} | Accueil</title>
      </Head>
      <h1>Accueil</h1>
      {!session && <p>Vous n'êtes pas connecté</p>}
      {session && <p>Connecté en tant que {session.user.email}</p>}
    </>
  );
};

export default Home;
