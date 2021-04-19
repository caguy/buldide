import Link from "next/link";
import { ConnexionButton } from "./components";
import { SITE_NAME } from "@config";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black text-white z-10">
      <div className="_container py-4 flex justify-between items-center">
        <Link href="/">
          <div>{SITE_NAME}</div>
        </Link>

        <div>
          <ConnexionButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
