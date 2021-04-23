import MenuItem from "./components/MenuItem";
import { useMenu } from "@helpers";
import ReactDOM from "react-dom";

export default function Menu() {
  const { isMenuOpen, toggleMenu } = useMenu();

  const Overlay = () => {
    if (typeof document === "undefined") return <></>;
    if (!isMenuOpen) return <></>;

    return ReactDOM.createPortal(
      <div
        className="bg-white opacity-80 absolute top-0 left-0 w-screen h-screen lg:hidden z-10"
        onClick={toggleMenu}
      />,
      document.body
    );
  };

  return (
    <div
      className="_panel-menu min-h-screen absolute transform -translate-x-full lg:translate-x-0 lg:static bg-white lg:bg-transparent backdrop-filter blur-lg backdrop-opacity-40 backdrop-brightness-110 border-r border-gray-200 z-30 transition-transform"
      style={isMenuOpen ? { transform: "translateX(0)" } : {}}
    >
      <div className="flex flex-col justify-between min-h-screen pt-16 pb-8 z-30">
        <nav className="mt-16">
          <ul>
            <MenuItem href="/" withSeparator>
              Accueil
            </MenuItem>
            <MenuItem href="/projets">Mes projets</MenuItem>
            <MenuItem href="/contributions">Mes contributions</MenuItem>
            <MenuItem href="/coups-de-coeur" withSeparator>
              Mes coups de cœur
            </MenuItem>
            <MenuItem href="/explorer">Explorer</MenuItem>
            <MenuItem href="/a-propos">À propos</MenuItem>
          </ul>
        </nav>
        <div className="opacity-40 text-xs">
          © Copyright Camille Guy {new Date().getFullYear()}
        </div>
      </div>
      <Overlay />
    </div>
  );
}
