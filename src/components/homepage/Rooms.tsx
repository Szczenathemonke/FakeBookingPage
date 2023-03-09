import { createContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import RoomList from "./RoomList";

function upTo(n: number) {
  const result = [];

  for (let i = 0; i < n; i += 1) {
    result.push(i);
  }
  return result;
}

function Rooms() {
  const [page, setPage] = useState<number>(1);
  const PAGES_COUNT = 3;

  return (
    <div className="flex flex-col items-center min-h-full bg-gradient-to-br from-emerald-100 to-emerald-300 ">
      <div className="flex flex-col  items-center py-10">
        <RoomList page={page} />
      </div>
      <div className="btn-group mb-5 ">
        {upTo(PAGES_COUNT).map((page) => {
          return (
            <button
              className="btn bg-emerald-500 border-none"
              onClick={() => setPage(page + 1)}
            >
              {page + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Rooms;

// bg-gradient-to-br from-emerald-100 to-emerald-500

{
  /* <button
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
        </button> */
}
