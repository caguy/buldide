import Link from "next/link";
import { BurgerIcon, ConnexionButton, SearchBar } from "./components";
import { SITE_NAME } from "@config";

const Header = ({ toggleMenu }) => {
  return (
    <header className="fixed top-0 w-full bg-black text-white z-40 py-2 flex items-center">
      <div className="_container-none lg:_container px-8 flex justify-between lg:_container-none">
        <div className="_panel-none lg:_panel-menu">
          <div
            id="menuHandler"
            className="inline-block lg:hidden mr-4 cursor-pointer"
            style={{ transform: "scale(0.85)" }}
            onClick={toggleMenu}
          >
            <BurgerIcon />
          </div>
          <div
            className="inline-block"
            style={{ transform: "translateY(0.15rem)" }}
          >
            <Link href="/">
              <a>
                <img
                  className="hidden sm:block"
                  src="/logo.svg"
                  alt={SITE_NAME}
                />
                <img
                  className="sm:hidden"
                  src="/logo_lt.svg"
                  alt={SITE_NAME}
                  aria-hidden
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="lg:_container _panel-content flex justify-end lg:justify-between items-center">
          <div>
            <SearchBar />
          </div>
          <div id="connexion">
            <ConnexionButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
