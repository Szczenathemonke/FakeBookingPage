import { FieldConfig, useField } from "formik";
import { ReactComponentElement } from "react";
import { Values } from "./FormFirstStep";

interface Props extends FieldConfig, Values {
  label: string;
}

const InputComponent = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
export default InputComponent;
