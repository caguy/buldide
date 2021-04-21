import { useRouter } from "next/router";
import SEO from "@components/SEO";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <>
      <SEO title="Page introuvable" />
      <h1>Cette page n'existe pas</h1>
      <p>
        <strong>404 - Not found</strong>
      </p>
      <p>La page que vous cherchez à atteindre n'existe pas.</p>
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

export default NotFoundPage;
