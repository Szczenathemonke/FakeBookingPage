import { createContext, PropsWithChildren, useContext, useState } from "react";
import { roomImg } from "../roomData";

type ContextType = {
  items: [];
  getCartItems: (id: number) => void;
  addToCart: (id: number) => void;
  removeOneFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export const CartContext = createContext<ContextType | null>({
  items: [],
  getCartItems: () => {},
  addToCart: () => {},
  removeOneFromCart: () => {},
  removeFromCart: () => {},
});

function CartProvider({ children }: PropsWithChildren<{}>) {
  const [cartProducts, setCartProducts] = useState([]);

  function getCartItems(id: number) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addToCart(id: number) {
    const quantity = getCartItems(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }
  function removeOneFromCart(id: number) {
    const quantity = getCartItems(id);

    if (quantity == 1) {
      removeFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function removeFromCart(id: number) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  const contextValue = {
    items: cartProducts,
    getCartItems,
    addToCart,
    removeOneFromCart,
    removeFromCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
