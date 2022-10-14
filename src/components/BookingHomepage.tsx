import { Link } from "react-router-dom";
import RoomCard from "./RoomCard";

function BookingHomepage() {
  return (
    <div className="h-screen max-h-full">
      <header className="h-24 bg-pink-200">TUTAJ BĘDZIE HEADER</header>
      <section className="min-h-full bg-purple-100">
        <div>
          <div>
            <Link to="/finalize">koszyk</Link>
          </div>
          <div>
            <Link to="/roomList">lista pokoi</Link>
          </div>
        </div>
        <div>
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

      <footer className="h-24 bg-pink-200">tutaj będzie footer</footer>
    </div>
  );
}

export default BookingHomepage;
