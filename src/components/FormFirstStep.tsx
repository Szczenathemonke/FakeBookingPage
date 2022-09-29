import { Formik, FormikProps, Form } from "formik";
import { createContext, useContext } from "react";
import InputComponent from "./InputComponent";
export type Values = {
  firstName: string;
  lastName: string;
  phone: number | string;
  email: string;
  birth: number | string;
};

const FormFirstStep = () => {
  const formStep = createContext(null);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        birth: "",
      }}
      onSubmit={(values) => alert(JSON.stringify(values))}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
          <InputComponent name="firstName" type="text" label="First name" />
          <InputComponent name="lastName" type="text" label="Last name" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormFirstStep;
