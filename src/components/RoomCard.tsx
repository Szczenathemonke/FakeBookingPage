function RoomCard() {
  return (
    <div className="card md:card-side max-w-screen-lg m-10 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-96 max-w-sm"
          src="https://www.inventio.info.pl/41906/szezlong-diva-196cm-aksamitny-zielony-40602.jpg"
          alt="roomImg"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
