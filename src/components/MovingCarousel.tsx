type CarouselProps = {
  statTitle: string;
  stat: string;
  statDescription: string;
  moveTextTo?: string;
};

function MovingCarousel() {
  return (
    <>
      <div className="overflow-hidden">
        <div
          className={`h-[200px] flex justify-between items-center bg-transparent`}
        >
          <div>
            <div className="stat mx-10 ">
              <div className="stat-title">Visit one among</div>
              <div className="stat-value">2,137 </div>
              <div className="stat-desc">places from all around the world</div>
            </div>
          </div>
          <div>
            <div className="stat mx-10 ">
              <div className="stat-title">choose your standards from over</div>
              <div className="stat-value">69,000 </div>
              <div className="stat-desc">hotels in best prices available</div>
            </div>
          </div>
          <div>
            <div className="stat mx-10 ">
              <div className="stat-title">Join our community of</div>
              <div className="stat-value">1,000,000 </div>
              <div className="stat-desc">
                customers and share your experience with us !
              </div>
            </div>
          </div>
        </div>
        <div className="hero h-[200px] carouselPlaces ">
          <div className="hero-overlay bg-opacity-70">.</div>
        </div>
      </div>
    </>
  );
}

export default MovingCarousel;
//
//
//
//
// statTitle="Visit one among"
//           stat="2,137 places"
//           statDescription="from all around the world"
//           moveTextTo="start"
//         />
//         {/* <MovingCarousel
//           statTitle="choose your standards from over"
//           stat="69,000 hotels"
//           statDescription="in best prices available"
//         />
//         <MovingCarousel
//           statTitle="Join our community of"
//           stat="1,000,000 customers"
//           statDescription="and share your experience with us !"
//           moveTextTo="end"
