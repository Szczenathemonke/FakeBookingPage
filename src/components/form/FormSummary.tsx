import { useContext } from "react";
import { CartContext } from "../features/CartContext";
import { useFormikContext } from "formik";

const FormSummary = () => {
  const cart = useContext(CartContext);
  const { values: unknown } = useFormikContext();

  return (
    <>
      <div>Summary</div>

      {cart?.items.map((item) => (
        <div key={item.id}>
          <span>{item.details.name}</span> od dnia <span></span>
        </div>
      ))}
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
