import { useField, useFormikContext } from "formik";
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type InputProps = {
  name: string;
  type: string;
  min?: string;
};

const DatePickerComponent = ({ ...props }: InputProps) => {
  const { values, setFieldValue } = useFormikContext();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-row w-64 gap-2  ">
      <label className="block">
        check-in
        <DatePicker
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-lg shadow-purple-500/50"
          {...field}
          {...props}
          selected={startDate}
          // onChange={(date) => setStartDate(date)}
          onChange={(date) => {
            setFieldValue("checkIn", date);
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
          // onChange={(date) => setEndDate(date)}
          onChange={(date) => {
            setFieldValue("checkOut", date);
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
