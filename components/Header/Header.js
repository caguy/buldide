import Link from "next/link";
import { SITE_NAME } from "@config";
import { useAppState } from "@context/hooks";

const Header = () => {
  const {
    nbFetch,
    user: { isLoggedIn },
  } = useAppState();

  return (
    <header className="fixed top-0 w-full bg-black text-white z-10">
      <div className="_container py-4 flex justify-between items-center">
        <Link href="/">
          <div>
            {SITE_NAME}
            {nbFetch > 0 && <span>...</span>}
          </div>
        </Link>

        {!isLoggedIn ? (
          <div>
            <Link href="/login">
              <button className="_button-secondary">Se connecter</button>
            </Link>
            <Link href="/inscription">
              <button className="_button-primary ml-4">S'inscrire</button>
            </Link>
          </div>
        ) : (
          <button className="_button-primary">Se déconnecter</button>
        )}
      </div>
    </header>
  );
};

export default Header;
