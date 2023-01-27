import HeaderHomepage from "../HeaderHomepage";
import HeroHomepage from "../HeroHomepage";
import CarouselHomepage from "../CarouselHomepage";
import RoomsHomepage from "../RoomsHomepage";
import NewsletterHomepage from "../NewsletterHomepage";
import FooterHomepage from "../FooterHomepage";

function BookingHomepage() {
  // const rooms = { room1: "potega", room2: "remont" };

  return (
    <div className="h-screen max-h-full">
      <HeaderHomepage />
      <HeroHomepage />
      <CarouselHomepage />
      <RoomsHomepage />
      <NewsletterHomepage />
      <FooterHomepage />
    </div>
  );
}

export default BookingHomepage;
