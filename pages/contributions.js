import SEO from "@components/SEO";
import { usePrivatePage } from "@helpers";

const ContributionPage = () => {
  usePrivatePage();

  return (
    <>
      <SEO title="Mes contributions" />
      <h1>Mes contributions</h1>
    </>
  );
};

export default ContributionPage;
