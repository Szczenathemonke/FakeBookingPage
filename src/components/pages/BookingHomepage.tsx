import Header from "../homepage/Header";
import HeroSection from "../homepage/HeroSection";
import Carousel from "../homepage/Carousel";
import Rooms from "../homepage/Rooms";
import Newsletter from "../homepage/Newsletter";
import Footer from "../homepage/Footer";

function Booking() {
  return (
    <div className="max-h-full">
      <Header isCart />
      <HeroSection />
      <Carousel />
      <Rooms />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Booking;
