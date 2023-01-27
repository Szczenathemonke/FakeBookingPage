import { useFormikContext } from "formik";
import { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CartContext } from "../features/CartContext";
import DatePickerComponent from "../features/DatePickerComponent";
import { Values } from "../MultiPageForm";

const FormFirstStep = () => {
  const cart = useContext(CartContext);

  // const { values } = useFormikContext<Values>();

  // const dateValidationName = values.reservation;

  return (
    <>
      {cart?.items.map((item) => (
        <DatePickerComponent
          name="checkIn"
          type="date"
          roomId={item.id}
          key={item.id}
        />
      ))}
    </>
  );
};

export default FormFirstStep;

// dodać nazwy pokoi i zdjęcie
