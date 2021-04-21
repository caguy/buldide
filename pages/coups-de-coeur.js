import SEO from "@components/SEO";
import { usePrivatePage } from "@helpers";

const FavoritesPage = () => {
  usePrivatePage();

  return (
    <>
      <SEO title="Mes coups de cœur" />
      <h1>Mes coups de cœur</h1>
    </>
  );
};

export default FavoritesPage;
