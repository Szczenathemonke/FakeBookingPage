import { Formik } from "formik";

const FormFirstStep = () => {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values) => alert(JSON.stringify(values))}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="name"
            name="name"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default FormFirstStep;
