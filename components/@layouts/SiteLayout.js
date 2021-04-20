import Header from "@components/Header";
import Menu from "@components/Menu";
import SEO from "@components/SEO";

const SiteLayout = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <div id="mainPanel" className="flex min-h-screen">
        <div
          id="menuPanel"
          className="_panel-menu flex flex-col justify-between bg-grey-50 backdrop-filter blur-lg backdrop-opacity-40 backdrop-brightness-110 pt-16 pb-8 border-r border-gray-200"
        >
          <Menu />
          <div className="opacity-40 text-xs">
            © Copyright Camille Guy {new Date().getFullYear()}
          </div>
        </div>
        <main id="contentPanel" className="_container _panel-content pt-16">
          {children}
        </main>
      </div>
    </>
  );
};

export default SiteLayout;
