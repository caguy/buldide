import Link from "next/link";
import { ConnexionButton, SearchBar } from "./components";
import { SITE_NAME } from "@config";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black text-white z-10 py-2 flex items-center">
      <div id="logo" className="_panel-menu">
        <Link href="/">
          <a>
            <img src="/logo.svg" alt={SITE_NAME} />
          </a>
        </Link>
      </div>

      <div className="_container _panel-content flex justify-between items-center">
        <div id="searchBar">
          <SearchBar />
        </div>
        <div id="connexion">
          <ConnexionButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
