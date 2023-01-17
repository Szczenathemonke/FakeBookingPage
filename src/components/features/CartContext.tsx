import { createContext, PropsWithChildren, useContext, useState } from "react";
import { roomImg } from "../roomData";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Room } from "../features/RoomList";

type ContextType = {
  items: {
    id: number;
    quantity: number;
    details: Room;
  }[];
  getCartItems: (id: number) => void;
  addToCart: (id: number) => void;
  removeOneFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export const fetchRoomList = async () => {
  const res = await fetch("https://hotels.niezniszczalny-chinczyk.com/rooms", {
    method: "GET",
  });

  return res.json();
};
export const CartContext = createContext<ContextType | null>({
  items: [],
  getCartItems: () => {},
  addToCart: () => {},
  removeOneFromCart: () => {},
  removeFromCart: () => {},
});

function CartProvider({ children }: PropsWithChildren<{}>) {
  const [cartProducts, setCartProducts] = useState<
    {
      id: number;
      quantity: number;
      details: Room;
    }[]
  >([]);
  const queryClient = useQueryClient();

  const { data } = useQuery(["rooms"], fetchRoomList);

  const getDetails = (id: number) => {
    return data.rooms.find((room: Room) => room.id === id);
  };

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

    const details = getDetails(id);

    console.log(cartProducts);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        { id: id, quantity: 1, details: details },
      ]);
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
