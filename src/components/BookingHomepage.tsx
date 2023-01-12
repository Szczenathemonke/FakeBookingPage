import { Link } from "react-router-dom";
import RoomCard from "./RoomCard";
import heroBg from "./src/assets/rooms/place2.jpg";
import "../customStyle.css";
import { Form, Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import InputComponent from "./InputComponent";
import MovingCarousel from "./MovingCarousel";
import MovingBg from "./MovingBg";
import RoomList from "./RoomList";

function BookingHomepage() {
  return (
    <div className="h-screen max-h-full">
      <header className="h-[100px] bg-emerald-500">TUTAJ BĘDZIE HEADER</header>
      <div className="h-[450px] bg-emerald-100 bg-[url('https://as2.ftcdn.net/jpg/01/24/61/41/1000_F_124614108_faptnrKzuSkAb5yhcyoos90S8QYg2fCX.jpg')]">
        <div className="hero min-h-full bg-hero-pattern ">
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-natural-content text-white">
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
              <button className="btn btn-primary max-w-[150px] bg-emerald-500 border-none">
                More...
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-emerald-500 ">
        <MovingCarousel />
      </div>
      <section className="min-h-full bg-emerald-100 ">
        <div>
          <div>
            <Link to="/finalize">koszyk</Link>
          </div>
          <div>
            <Link to="/roomList">lista pokoi</Link>
          </div>
        </div>
        <div className="flex flex-col  items-center">
          <RoomList />
          {/* <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard /> */}
        </div>
        <div>Pagination</div>
      </section>
      <div className="h-[260px] bg-emerald-500 flex justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl">Subscribe</h1>
          <p className="text-xl">And keep track on out latest offers!</p>
          <div className="flex flex-row gap-10 ">
            <Formik
              initialValues={{ newsletter: "" }}
              validationSchema={Yup.object().shape({
                newsletter: Yup.string().email("Invalid email"),
              })}
              onSubmit={(values) => {
                if (values.newsletter !== "") {
                  alert("Thank you for subscribing our newsletter!");
                }
              }}
            >
              {(props) => (
                <Form className="flex flex-row gap-4">
                  <div>
                    <InputComponent name="newsletter" type="email" />
                  </div>
                  <button
                    className="btn text-black border-none bg-emerald-100 focus:bg-emerald-100"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <footer className="h-[100px] bg-emerald-200">tutaj będzie footer</footer>
    </div>
  );
}

export default BookingHomepage;
