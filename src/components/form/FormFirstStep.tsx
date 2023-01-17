import { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CartContext } from "../features/CartContext";
import DatePickerComponent from "../features/DatePickerComponent";

const FormFirstStep = () => {
  const cart = useContext(CartContext);

  return (
    <>
      {cart?.items.map((item) => (
        <DatePickerComponent name="checkIn" type="date" key={item.id} />
      ))}
    </>
  );
};

export default FormFirstStep;

// dodać nazwy pokoi i zdjęcie
