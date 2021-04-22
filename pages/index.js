import { useSession } from "next-auth/client";
import SEO from "@components/SEO";

const HomePage = () => {
  const [session] = useSession();

  return (
    <>
      <SEO title="Accueil" />
      <h1>Bonjour{session?.user?.username && ` ${session.user.username}`}</h1>
      {!session && <p>Vous n'êtes pas connecté</p>}
      {session && <p>Connecté en tant que {session.user.email}</p>}
    </>
  );
};

export default HomePage;
