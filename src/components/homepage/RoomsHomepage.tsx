import { createContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import RoomList from "./RoomList";

function RoomsHomepage() {
  const [page, setPage] = useState<number>(1);
  return (
    <div className="flex flex-col items-center min-h-full bg-gradient-to-br from-emerald-100 to-emerald-300 ">
      <div className="flex flex-col  items-center py-10">
        <RoomList page={page} />
      </div>
      <div className="btn-group mb-5 ">
        <button
          className="btn bg-emerald-500 border-none"
          onClick={() => setPage(1)}
        >
          1
        </button>
        <button
          className="btn bg-emerald-500 border-none"
          onClick={() => setPage(2)}
        >
          2
        </button>
        <button
          className="btn bg-emerald-500 border-none"
          onClick={() => setPage(3)}
        >
          3
        </button>
      </div>
    </div>
  );
}

export default RoomsHomepage;

// bg-gradient-to-br from-emerald-100 to-emerald-500
