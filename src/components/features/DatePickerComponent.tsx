import { useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Values } from "../MultiPageForm";

type InputProps = {
  name: string;
  type: string;
  min?: string;
  roomId: number;
};

const DatePickerComponent = ({ ...props }: InputProps) => {
  const { values, setFieldValue } = useFormikContext<Values>();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [field, meta] = useField(props);

  const newReservation = {
    room_id: props.roomId,
    start_date: new Date().toISOString().slice(0, 10),
    end_date: new Date().toISOString().slice(0, 10),
  };

  return (
    <div className="flex flex-row w-64 gap-2  ">
      <label className="block">
        check-in
        <DatePicker
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-lg shadow-purple-500/50"
          {...field}
          {...props}
          selected={startDate}
          onChange={(date) => {
            if (
              values.reservation.find((e) => e.room_id === props.roomId) ===
              undefined
            ) {
              values.reservation.push(newReservation);
            }
            setFieldValue(
              `reservation.${values.reservation.findIndex(
                (e) => e.room_id === props.roomId
              )}.start_date`,
              date?.toISOString().slice(0, 10),
              true
            );
            setStartDate(date);
          }}
          dateFormat="dd.MM.yy"
          selectsStart
          startDate={startDate}
          endDate={endDate}
          shouldCloseOnSelect={true}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}

      <label className="block">
        check-out
        <DatePicker
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-lg shadow-purple-500/50"
          {...field}
          {...props}
          selected={endDate}
          onChange={(date) => {
            if (
              values.reservation.find((e) => e.room_id === props.roomId) ===
              undefined
            ) {
              values.reservation.push(newReservation);
            }
            setFieldValue(
              `reservation.${values.reservation.findIndex(
                (e) => e.room_id === props.roomId
              )}.end_date`,
              date?.toISOString().slice(0, 10),
              true
            );

            setEndDate(date);
          }}
          dateFormat="dd.MM.yy"
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          shouldCloseOnSelect={true}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default DatePickerComponent;

{
  /* <label className="block">
        {label}
        <DatePicker
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md "
          {...field}
          {...props}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */
}

// selectsStart
// startDate={startDate}
// endDate={endDate}

// end
// selectsEnd
// startDate={startDate}
// endDate={endDate}
// minDate={startDate}
