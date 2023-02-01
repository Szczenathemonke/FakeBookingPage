import React from "react";
import ShoppingCartDropdown from "./features/ShoppingCartDropdown";

function HeaderHomepage() {
  return (
    <>
      <header className="navbar top-0 sticky z-20 h-[60px] bg-emerald-300 shadow-md">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            BOOKING
          </a>
        </div>
        <div className="flex-none">
          <ShoppingCartDropdown />
        </div>
      </header>
    </>
  );
}

export default HeaderHomepage;
