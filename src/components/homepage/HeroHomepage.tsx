import "../customStyle.css";

function HeroHomepage() {
  return (
    <>
      <div className="bg-emerald-100 homePageHeroBg">
        <div className="hero min-h-full bg-hero-pattern ">
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content min-h-[400px] text-center text-natural-content text-white">
            <div className="flex flex-col items-center">
              <h1 className="mb-5 text-5xl font-bold">
                Podróże Małe i Duże....{" "}
              </h1>
              <p className="mb-5 w-1/2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                finibus pulvinar nunc a placerat. Sed dolor odio, aliquam at
                erat a, ullamcorper eleifend est. Mauris tincidunt eu mi non
                ornare. Pellentesque habitant a euismod et. Sed dictum orci leo,
                cursus vehicula arcu aliquam nec. S
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroHomepage;
