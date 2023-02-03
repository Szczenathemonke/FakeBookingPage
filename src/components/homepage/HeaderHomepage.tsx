import { displayValue } from "@tanstack/react-query-devtools/build/lib/utils";
import ShoppingCartDropdown from "./ShoppingCartDropdown";

function HeaderHomepage(props: { isCart: boolean }) {
  return (
    <>
      <header className="navbar top-0 sticky z-20 h-[60px] bg-emerald-300 shadow-md">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">
            BOOKING
          </a>
        </div>
        {props.isCart ? (
          <div className="flex-none">
            <ShoppingCartDropdown />
          </div>
        ) : (
          <div></div>
        )}
      </header>
    </>
  );
}

export default HeaderHomepage;
