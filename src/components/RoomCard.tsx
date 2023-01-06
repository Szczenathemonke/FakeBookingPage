import { Room } from "./RoomList";

function RoomCard(props: {
  name: string;
  price: number;
  beds: number;
  pets: boolean;
}) {
  return (
    <div className="card md:card-side md:w-[800px] m-10 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-96 max-w-sm"
          src="https://www.inventio.info.pl/41906/szezlong-diva-196cm-aksamitny-zielony-40602.jpg"
          alt="roomImg"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">{props.name}</h2>

        <div>
          <div>{props.pets ? "przyjazne dla zwierząt" : "tylko dla ludzi"}</div>
          <div>{props.beds}</div>
          <div>Cena pokoju: {props.price}</div>
          <div>Cena pokoju: {props.price}</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
