import HeaderHomepage from "../homepage/HeaderHomepage";
import HeroHomepage from "../homepage/HeroHomepage";
import CarouselHomepage from "../homepage/CarouselHomepage";
import RoomsHomepage from "../homepage/RoomsHomepage";
import NewsletterHomepage from "../homepage/NewsletterHomepage";
import FooterHomepage from "../homepage/FooterHomepage";

function BookingHomepage() {
  return (
    <div className="max-h-full">
      <HeaderHomepage isCart />
      <HeroHomepage />
      <CarouselHomepage />
      <RoomsHomepage />
      <NewsletterHomepage />
      <FooterHomepage />
    </div>
  );
}

export default BookingHomepage;
