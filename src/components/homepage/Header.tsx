import ShoppingCartDropdown from "./ShoppingCartDropdown";

function Header(props: { isCart: boolean }) {
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
          <div />
        )}
      </header>
    </>
  );
}

export default Header;
