import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import Login from "@components/Login";
import SEO from "@components/SEO";

const ConnexionPage = () => {
  const [session, isLoading] = useSession();
  const router = useRouter();

  // Will be populated if the users arrived here from a private page (see usePrivatePage)
  const { redirect } = router.query;

  useEffect(() => {
    // The user is already logged in, redirect him to home page
    if (!isLoading && session) {
      router.replace("/");
    }
  }, [session, isLoading]);

  return (
    <>
      <SEO title="Connexion" />
      <h1>Se connecter</h1>
      <div className="max-w-lg">
        {redirect && (
          <div className="_alert-warning mb-6">
            <p>Cette page est réservée aux utilisateurs connectés.</p>
          </div>
        )}
        <Login redirect={redirect} />
      </div>
    </>
  );
};

export default ConnexionPage;
