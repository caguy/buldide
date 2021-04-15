import Link from "next/link";

const Header = () => (
  <header className="fixed top-0 w-full bg-black text-white z-10">
    <div className="ctn py-4 flex justify-between items-center">
      <Link href="/">
        <div>Buldidé</div>
      </Link>
      <div>
        <Link href="/login">
          <button className="btn-secondary">Se connecter</button>
        </Link>
        <Link href="/inscription">
          <button className="btn-primary ml-4">S'inscrire</button>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
