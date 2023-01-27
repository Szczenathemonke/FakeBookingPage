import React, { useContext, useState } from "react";
import { CartContext, fetchRoomList } from "./CartContext";
import { roomImg, petsIco } from "../roomData";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Room } from "./RoomList";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const cart = useContext(CartContext);
  const itemsInCart = cart?.items;
  const queryClient = useQueryClient();

  const { data } = useQuery(["rooms"], fetchRoomList);

  // function CheckoutTotalCost() {
  //   const [totalCost, setTotalCost] = useState(0);

  //   itemsInCart?.map((item) =>
  //     item.id === data.rooms.id
  //       ? setTotalCost((x) => x + data.rooms.price_in_cents / 100)
  //       : 0
  //   );
  //   return totalCost;
  // }
  // const TotalCostInCart = CheckoutTotalCost();
  return (
    <>
      <div className="container bg-white md:w-[300px] mr-10">
        <div className="card ">
          <div className="card-body ">
            <h2 className="card-title"></h2>
            {itemsInCart?.map((item) => (
              <span key={item.id}>
                {item.details.name} x {item.quantity}
              </span>
            ))}
            <span></span>
            <div className="card-actions justify-center">
              <Link to="/finalize">
                <button className="btn bg-emerald-100 text-black">
                  checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;

// {data.rooms.map((room: Room) => (
//   <RoomCard
//     key={room.id}
//     id={room.id}
//     name={room.name}
//     beds={room.beds}
//     pets={room.pets_allowed}
//     price={room.price_in_cents}
//   />
// ))}
