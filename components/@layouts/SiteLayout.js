import { useState } from "react";
import Header from "@components/Header";
import Menu from "@components/Menu";
import SEO from "@components/SEO";

const SiteLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <SEO />
      <Header toggleMenu={toggleMenu} />
      <div className="lg:flex min-h-screen">
        <div
          className="_panel-menu min-h-screen absolute transform -translate-x-full lg:translate-x-0 lg:static bg-white lg:bg-transparent backdrop-filter blur-lg backdrop-opacity-40 backdrop-brightness-110 border-r border-gray-200 z-40 transition-transform"
          style={isMenuOpen ? { transform: "translateX(0)" } : {}}
        >
          <Menu toggleMenu={toggleMenu} />
        </div>
        <main className="_container-none lg:_container px-8 _panel-content pt-16 relative z-0">
          {children}
        </main>
        {isMenuOpen && (
          <div
            id="overlay"
            className="bg-white opacity-80 absolute top-0 left-0 w-screen h-screen lg:hidden z-10"
            onClick={toggleMenu}
          />
        )}
      </div>
    </>
  );
};

export default SiteLayout;
