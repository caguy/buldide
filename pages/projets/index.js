import Link from "next/link";
import SEO from "@components/SEO";
import { usePrivatePage } from "@helpers";

const ProjetPage = () => {
  usePrivatePage();

  return (
    <>
      <SEO title="Mes projets" />
      <h1>Mes projets</h1>
      <Link href="/projets/nouveau">
        <button className="_button-primary">+ Nouveau projet</button>
      </Link>
    </>
  );
};

export default ProjetPage;
