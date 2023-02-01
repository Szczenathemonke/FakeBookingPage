import { spawn } from "child_process";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

function ShoppingCartDropdown() {
  const cart = useContext(CartContext);
  const [cartIndicator, setCartIndicator] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cart?.items.length) {
      return;
    }
    return setCartIndicator(cart?.items.length);
  }, [cart]);

  const itemsInCart = cart?.items;
  return (
    <>
      <div tabIndex={0} className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            {/* wstawic svg jako obrazek */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {/* wstawic svg jako obrazek */}
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
                    disabled={itemsInCart?.length === 0 ? true : false}
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

// setCartIndicator((prev) => prev + 1);
