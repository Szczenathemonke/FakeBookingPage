import React from "react";
import "../customStyle.css";

function CarouselHomepage() {
  return (
    <div className="bg-emerald-500 ">
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
    </div>
  );
}

export default CarouselHomepage;
