import InputComponent from "./InputComponent";

const FormSecondStep = () => {
  return (
    <>
      <InputComponent name="phone" type="number" label="phone" />
      <InputComponent name="email" type="text" label="email" />
    </>
  );
};

export default FormSecondStep;
