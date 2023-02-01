import { useFormikContext } from "formik";
import { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CartContext } from "../features/CartContext";
import DatePickerComponent from "../features/DatePickerComponent";
import RoomCardCheckout from "../features/RoomCardCheckout";
import { Values } from "./MultiPageForm";

const FormFirstStep = () => {
  const cart = useContext(CartContext);

  // const { values } = useFormikContext<Values>();

  // const dateValidationName = values.reservation;

  return (
    <>
      {cart?.items.map((item) => (
        <div className="flex flex-row items-center gap-5 my-2 pr-2 bg-emerald-100 rounded-xl m">
          <RoomCardCheckout key={item.id} name={item.details.name} />
          <DatePickerComponent
            name="checkIn"
            type="date"
            roomId={item.id}
            key={item.id}
          />
        </div>
      ))}
    </>
  );
};

export default FormFirstStep;

// dodać nazwy pokoi i zdjęcie
