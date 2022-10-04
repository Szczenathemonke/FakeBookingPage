import InputComponent from "./InputComponent";

const FormFirstStep = () => {
  return (
    <>
      <InputComponent name="firstName" type="text" label="First name" />

      <InputComponent name="lastName" type="text" label="Last name" />
    </>
  );
};

export default FormFirstStep;
