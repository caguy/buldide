import Link from "next/link";

export default function Menu({ toggleMenu }) {
  return (
    <div className="flex flex-col justify-between min-h-screen pt-16 pb-8 z-30">
      <nav className="mt-16">
        <ul>
          <li className="my-4" onClick={toggleMenu}>
            <Link href="/">
              <a className="_menu-link">Accueil</a>
            </Link>
            <hr className="_separator my-6" />
          </li>
          <li className="my-4" onClick={toggleMenu}>
            <Link href="/projets">
              <a className="_menu-link">Mes projets</a>
            </Link>
          </li>
          <li className="my-4" onClick={toggleMenu}>
            <Link href="/contributions">
              <a className="_menu-link">Mes contributions</a>
            </Link>
          </li>
          <li className="my-4" onClick={toggleMenu}>
            <Link href="/coups-de-coeur">
              <a className="_menu-link">Mes coups de cœur</a>
            </Link>
            <hr className="_separator my-6" />
          </li>
          <li className="my-4" onClick={toggleMenu}>
            <Link href="/explorer">
              <a className="_menu-link">Explorer</a>
            </Link>
          </li>
          <li className="my-4" onClick={toggleMenu}>
            <Link href="/a-propos">
              <a className="_menu-link">À propos</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="opacity-40 text-xs">
        © Copyright Camille Guy {new Date().getFullYear()}
      </div>
    </div>
  );
}
