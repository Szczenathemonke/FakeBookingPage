import { useField } from "formik";

type InputProps = {
  label: string;
  name: string;
  type: string;
};

const InputComponent = ({ label, ...props }: InputProps) => {
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
