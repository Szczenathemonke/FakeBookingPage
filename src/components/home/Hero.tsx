import React from "react";
import HeroImg from "../../assets/hero1.png";

function Hero() {
  return (
    <>
      <div className="heroNewBg bg-no-repeat hero h-[50vh] xl:h-screen max-h-[900px] bg-opacity-60 flex flex-col justify-center items-start basis-1/2">
        <h1 className="text-5xl font-semibold">
          Wherever you go, chase your dreams
        </h1>
        <div>Filter Bar</div>
      </div>
    </>
  );
}

export default Hero;
