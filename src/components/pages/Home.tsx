import Header from "../homepage/Header";

import Carousel from "../homepage/Carousel";
import Rooms from "../homepage/Rooms";
import Newsletter from "../homepage/Newsletter";
import Footer from "../homepage/Footer";
import Hero from "../home/Hero";

function Home() {
  return (
    <div className="max-h-full">
      <Header isCart />
      <Hero />
      <Carousel />
      <Rooms />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
