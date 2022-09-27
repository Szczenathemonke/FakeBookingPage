import { Formik, FormikProps, Form } from "formik";
import { useContext } from "react";
import InputComponent from "./InputComponent";
export type Values = {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  birth: number;
};

const FormFirstStep = () => {
  const formStep = createContext();
  return (
    <Formik
      initialValues={{ firstName: "" }}
      onSubmit={(values) => alert(JSON.stringify(values))}
    >
      {(props: FormikProps<Values>) => (
        <Form onSubmit={props.handleSubmit}>
          <InputComponent name="firstName" type="text" label="First name" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormFirstStep;
