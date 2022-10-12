import { useState } from "react";
import InputComponent from "./InputComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerComponent from "./DatePickerComponent";

const FormFirstStep = () => {
  return (
    <>
      <DatePickerComponent name="checkIn" type="date" label="check-in" />
      <DatePickerComponent name="checkOut" type="date" label="check-out" />
    </>
  );
};

export default FormFirstStep;

{
  /* <>
      <InputComponent
        name="checkIn"
        type="date"
        label="Check-in"
        min={new Date().toJSON().slice(0, 10)}
      />

      <InputComponent name="checkOut" type="date" label="Check-out" min={} />
    </> */
}
