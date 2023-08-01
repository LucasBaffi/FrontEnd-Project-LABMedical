import React, { createContext, useState } from 'react';

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [navbarText, setNavbarText] = useState('Navbar');

  const updateNavbarText = (text) => {
    setNavbarText(text);
  };

  return (
    <NavbarContext.Provider value={{ navbarText, updateNavbarText }}>
      {children}
    </NavbarContext.Provider>
  );
};

export { NavbarContext, NavbarProvider };
