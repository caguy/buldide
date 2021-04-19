import Link from "next/link";
import { ConnexionButton, SearchIcon } from "./components";
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
        <div id="searchbar" className="relative">
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-black-light pt-1 leading-6 pl-8 pr-4 text-sm rounded-md border border-white border-opacity-10 hover:border-opacity-40 text-white"
            style={{ width: "24em" }}
          />
          <div
            style={{
              position: "absolute",
              top: 6,
              left: 6,
              transform: "scale(0.8)",
            }}
          >
            <SearchIcon />
          </div>
        </div>
        <div id="connexion">
          <ConnexionButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
