import "./customStyle.css";

function CarouselHomepage() {
  return (
    <div className="bg-gradient-to-br from-emerald-100 to-emerald-400 ">
      <div className="overflow-hidden">
        <div className=" flex flex-col items-center lg:flex-row lg:h-[200px] lg:justify-between lg:items-center bg-transparent">
          <div>
            <div className="stat mx-10 w-[350px]">
              <div className="stat-title">Visit one among</div>
              <div className="stat-value">2,137 </div>
              <div className="stat-desc">places from all around the world</div>
            </div>
          </div>
          <div>
            <div className="stat mx-10 w-[350px]">
              <div className="stat-title">choose your standards from over</div>
              <div className="stat-value">69,000 </div>
              <div className="stat-desc">hotels in best prices available</div>
            </div>
          </div>
          <div>
            <div className="stat mx-10 w-[350px]">
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
    </div>
  );
}

export default CarouselHomepage;
