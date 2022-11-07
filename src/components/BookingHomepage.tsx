import { Link } from "react-router-dom";
import RoomCard from "./RoomCard";
import heroBg from "./src/assets/rooms/room-lux.png";
import "../customStyle.css";

function BookingHomepage() {
  return (
    <div className="h-screen max-h-full">
      <header className="h-[170px] bg-emerald-500">TUTAJ BĘDZIE HEADER</header>
      <div className="h-[918px] bg-emerald-100">
        <div
          className="hero min-h-full bg-hero-pattern"
          style={{
            backgroundImage: `url("../assets/rooms/room-lux.png")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-natural-content text-white">
            <div className="flex flex-col items-center">
              <h1 className="mb-5 text-5xl font-bold">
                Podróże Małe i Duże....{" "}
              </h1>
              <p className="mb-5 w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                finibus pulvinar nunc a placerat. Sed dolor odio, aliquam at
                erat a, ullamcorper eleifend est. Mauris tincidunt eu mi non
                ornare. Pellentesque habitant a euismod et. Sed dictum orci leo,
                cursus vehicula arcu aliquam nec. S
              </p>
              <button className="btn btn-primary max-w-[150px] bg-emerald-500 border-none">
                More...
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-emerald-500">
        <div className="h-[222px]">carousel</div>
        <div className="h-[222px]">carousel</div>
        <div className="h-[222px]">carousel</div>
      </div>
      <section className="min-h-full bg-emerald-100 ">
        <div>
          <div>
            <Link to="/finalize">koszyk</Link>
          </div>
          <div>
            <Link to="/roomList">lista pokoi</Link>
          </div>
        </div>
        <div className="flex flex-col  items-center">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
        <div>Pagination</div>
      </section>
      <div className="h-[320px] bg-emerald-500">
        <div></div>
      </div>

      <footer className="h-[320px] bg-emerald-200">tutaj będzie footer</footer>
    </div>
  );
}

export default BookingHomepage;
