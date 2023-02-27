import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../dataAndFeatures/CartContext";

function ShoppingCartDropdown() {
  const cart = useContext(CartContext);
  // const [cartIndicator, setCartIndicator] = useState<number>(0);
  const navigate = useNavigate();

  const cartIndicator = cart?.items?.length ?? 0;

  // useEffect(() => {
  //   if (!cart?.items.length) {
  //     return;
  //   }
  //   return setCartIndicator(cart?.items.length);
  // }, [cart]);

  const itemsInCart = cart?.items;
  return (
    <>
      <div tabIndex={0} className="dropdown dropdown-end ">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <img src="src/assets/icons/indicator.svg" alt="" />
            <span className="badge badge-sm indicator-item">
              {cartIndicator}
            </span>
          </div>
        </label>
        <div tabIndex={0} className="dropdown-content ">
          <div className="container bg-white shadow-xl rounded-xl md:w-[350px] mr-10">
            <div className="card  ">
              <div className="card-body  ">
                <h2 className="card-title ">Koszyk</h2>
                <div className="divider my-0"></div>
                {itemsInCart?.length === 0
                  ? "koszyk jest pusty"
                  : itemsInCart?.map((item) => (
                      <div key={item.id}>
                        <span> </span>
                        <span> Pokój </span>
                        <span className="font-bold">"{item.details.name}"</span>
                      </div>
                    ))}

                <div className="divider my-0"></div>
                <span></span>
                <div className="card-actions justify-center">
                  <button
                    className="btn bg-emerald-100 text-black"
                    disabled={itemsInCart?.length === 0}
                    onClick={() => navigate("/finalize")}
                  >
                    checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCartDropdown;
