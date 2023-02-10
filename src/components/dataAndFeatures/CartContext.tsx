import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Room } from "../homepage/RoomList";
import { Values } from "../form/MultiPageForm";

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
  translateShipping: (value: Values) => void;
  translatedOrder: RoomOrder | null;
};

type RoomOrder = {
  rooms_order: { room_id: number; start_date: string; end_date: string }[];
  address_details: {
    email: string;
    billing_city: string;
    billing_street: string;
    billing_street_add?: string | undefined;
    billing_postcode: string;
    billing_country: string;
  };
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
  translateShipping: () => {},
  translatedOrder: null,
});

function CartProvider({ children }: PropsWithChildren<{}>) {
  const [cartProducts, setCartProducts] = useState<
    {
      id: number;
      quantity: number;
      details: Room;
    }[]
  >([]);
  const [translatedOrder, setTranslatedOrder] = useState<RoomOrder | null>(
    null
  );

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
  function translateShipping(values: Values) {
    const roomOrder: RoomOrder = {
      rooms_order: [],
      address_details: {
        email: `${values.email}`,
        billing_city: `${values.city}`,
        billing_street: `${values.address1}`,
        billing_street_add: `${values.address2}`,
        billing_postcode: `${values.zip}`,
        billing_country: `${values.country}`,
      },
    };
    values.reservation.forEach((e) => roomOrder.rooms_order.push(e));

    return setTranslatedOrder(roomOrder);
  }
  const contextValue = {
    items: cartProducts,
    getCartItems,
    addToCart,
    removeOneFromCart,
    removeFromCart,
    translatedOrder: translatedOrder,
    translateShipping,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
