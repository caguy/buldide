import SEO from "@components/SEO";
import { usePrivatePage } from "@helpers";

const ProjetPage = () => {
  usePrivatePage();

  return (
    <>
      <SEO title="Mes projets" />
      <h1>Mes projets</h1>
    </>
  );
};

export default ProjetPage;
