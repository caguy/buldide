import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import SEO from "@components/SEO";

const DeconnexionPage = () => {
  const [session, isLoading] = useSession();
  const router = useRouter();

  useEffect(() => {
    // The user is actually logged in, redirect him to home page
    if (!isLoading && session) {
      router.replace("/");
    }
  }, [session, isLoading]);

  return (
    <>
      <SEO title="À bientôt sur Buldidé !" />
      <h1>À bientôt !</h1>
      <p>Vous êtes désormais déconnecté.</p>
      <p>Au plaisir de vous revoir sur Buldidé !</p>
      <div className="mt-8">
        <button
          className="_button-secondary mr-2"
          onClick={() => router.back()}
        >
          ← Page précédente
        </button>
        <button className="_button-primary" onClick={() => router.push("/")}>
          Retour à l'accueil
        </button>
      </div>
    </>
  );
};

export default DeconnexionPage;
