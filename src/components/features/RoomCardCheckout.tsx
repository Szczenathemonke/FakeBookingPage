import React, { useContext } from "react";
import { roomImg } from "../roomData";
import { CartContext } from "./CartContext";
import { Room } from "./RoomList";

function RoomCardCheckout(props: { name: string }) {
  const cart = useContext(CartContext);
  let roomSrc = roomImg.find((x) => x.name === props.name)?.src;
  return (
    <>
      <div className="card w-48 h-36 bg-base-100 image-full">
        <figure>
          <img src={roomSrc} alt="Room img" />
        </figure>
        <div className="card-body gap-0  ">
          <span>Pokój </span>
          <span>{props.name}</span>
        </div>
      </div>
    </>
  );
}

export default RoomCardCheckout;

// {
//     id: number;
//     name: string;
//     price: number;
//     beds: number;
//     pets: boolean;
//   }
