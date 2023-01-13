import React from "react";
import { Link } from "react-router-dom";
import RoomList from "./features/RoomList";
import ShoppingCart from "./ShoppingCart";

function RoomsHomepage() {
  return (
    <div className="min-h-full bg-emerald-100 ">
      <div>
        <div className="flex flex-col  items-end">
          <Link to="/finalize">koszyk</Link>
          <ShoppingCart />
        </div>
        <div>
          <Link to="/roomList">lista pokoi</Link>
        </div>
      </div>
      <div className="flex flex-col  items-center">
        <RoomList />
      </div>
      <div>Pagination</div>
    </div>
  );
}

export default RoomsHomepage;
