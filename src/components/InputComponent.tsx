import { FieldConfig, useField } from "formik";
import { ReactComponentElement } from "react";
import { Values } from "./MultiPageForm";

interface Props extends FieldConfig, Values {
  label: string;
}

const InputComponent = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="block">
        {label}
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md "
          {...field}
          {...props}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
export default InputComponent;
