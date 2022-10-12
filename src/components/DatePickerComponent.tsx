import { useField, useFormikContext } from "formik";
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type InputProps = {
  label: string;
  name: string;
  type: string;
  min?: string;
};

const DatePickerComponent = ({ label, ...props }: InputProps) => {
  const { setFieldValue } = useFormikContext();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [field, meta] = useField(props);
  return (
    <>
      <label className="block">
        {label}
        <DatePicker
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md "
          {...field}
          {...props}
          selected={(field.value && new Date(field.value)) || null}
          onChange={(date) => setFieldValue(field.name, date)}
          dateFormat="dd.MM.yy"
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
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
