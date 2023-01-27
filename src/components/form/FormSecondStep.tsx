import InputComponent from "../features/InputComponent";

const FormSecondStep = () => {
  return (
    <>
      <InputComponent name="firstName" type="text" label="First name" />
      <InputComponent name="lastName" type="text" label="Last name" />
      <InputComponent name="address1" type="text" label="address" />
      <InputComponent name="address2" type="text" label="address(optional)" />
      <InputComponent name="city" type="text" label="city" />
      <InputComponent name="zip" type="text" label="zip-code" />
      <InputComponent name="country" type="text" label="country" />
      <InputComponent name="email" type="email" label="email address" />
      {/* <InputComponent
        name="emailConfirm"
        type="email"
        label="confirm your email address"
      /> */}
    </>
  );
};

export default FormSecondStep;
