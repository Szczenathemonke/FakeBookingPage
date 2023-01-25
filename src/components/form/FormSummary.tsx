import { useContext } from "react";
import { CartContext } from "../features/CartContext";
import { useField, useFormikContext } from "formik";
import { Values } from "../MultiPageForm";
import StripeCheckout from "../features/StripeCheckout";

const FormSummary = () => {
  const cart = useContext(CartContext);
  const { values, setFieldValue } = useFormikContext<Values>();

  // const itemCheckInDate = (itemId: number) => {
  //   return values.reservation
  //     .find((e) => e.roomId === itemId)
  //     ?.checkIn.toISOString()
  //     .slice(0, 10);
  // };

  // const itemCheckOutDate = (itemId: number) => {
  //   return values.reservation
  //     .find((e) => e.roomId === itemId)
  //     ?.checkOut.toISOString()
  //     .slice(0, 10);
  // };

  return (
    <>
      <div>Summary</div>

      <div className="flex flex-col gap-2 justify-start bg-emerald-100">
        <div>Dane adresowe:</div>
        <div>
          <span>FirstName: </span>
          {values.firstName}
        </div>
        <div>
          <span>LastName: </span>
          {values.lastName}
        </div>
        <div>
          <span>address1: </span>
          {values.address1}
        </div>
        <div>
          <span>address2: </span>
          {values.address2}
        </div>
        <div>
          <span>city: </span>
          {values.city}
        </div>
        <div>
          <span>country: </span>
          {values.country}
        </div>
        <div>
          <span>email: </span>
          {values.email}
        </div>
        <div>
          <span>zip: </span>
          {values.zip}
        </div>
      </div>

      {cart?.items.map((item) => (
        <div key={item.id}>
          <span>{item.details.name} </span>
          <span>od dnia </span>
          <div>
            {values.reservation.find((e) => e.room_id === item.id)?.start_date}
          </div>
          <span>do dnia </span>
          <div>
            {values.reservation.find((e) => e.room_id === item.id)?.end_date}
          </div>
        </div>
      ))}
      <StripeCheckout />
    </>
  );
};

export default FormSummary;

// formik values:
// {
//   reservation: [{ roomId: "", checkIn: "", checkOut: "" }],

//   firstName: "",
//   lastName: "",
//   address1: "",
//   address2: "",
//   city: "",
//   zip: "",
//   country: "",
//   email: "",
// }

// values.reservation.find((e) => e.roomId === item.id)
