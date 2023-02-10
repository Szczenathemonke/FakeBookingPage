import { roomImg } from "../roomData";

function RoomCardCheckout(props: { name: string }) {
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
