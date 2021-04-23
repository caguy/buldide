import React, { useContext } from "react";
import { useState } from "react";

const MenuContext = React.createContext();

const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <MenuContext.Provider
      value={{ isMenuOpen, toggleMenu, openMenu, closeMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};

const useMenu = () => {
  return useContext(MenuContext);
};

export { MenuProvider };
export default useMenu;
