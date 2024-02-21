import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-950 py-3">
      <div className="flex items-center  justify-between mx-auto container">
        <img className="w-32" src="/src/images/logo.svg" alt="Logo" />

        <div className="hidden md:flex gap-10 items-center uppercase font-semibold text-white text-xl">
          <a href="#" className="enlace">
            Home
          </a>
          <a href="#" className="enlace">
            Tournament
          </a>
          <a href="#" className="enlace">
            News
          </a>
          <a href="#" className="enlace">
            Contact
          </a>
        </div>

        <button class="btn">Unirse a un Team</button>
      </div>
    </header>
  );
};

export default Header;
