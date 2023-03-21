import { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CartContext } from "../dataAndFeatures/CartContext";
import DatePickerComponent from "./DatePickerComponent";

import RoomCardCheckout from "./RoomCardCheckout";

const FormFirstStep = () => {
  const cart = useContext(CartContext);

  return (
    <>
      {cart?.items.map((item) => (
        <div
          key={item.id}
          className="flex flex-row items-center gap-5 my-2 pr-2 bg-emerald-100 rounded-xl"
        >
          <RoomCardCheckout name={item.details.name} />
          <DatePickerComponent name="checkIn" type="date" roomId={item.id} />
        </div>
      ))}
    </>
  );
};

export default FormFirstStep;
