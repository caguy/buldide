import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import Login from "@components/Login";
import SEO from "@components/SEO";

const ConnexionPage = () => {
  const [session, isLoading] = useSession();
  const router = useRouter();

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
      <Login />
    </>
  );
};

export default ConnexionPage;
