import InputComponent from "./InputComponent";

const FormSecondStep = () => {
  return (
    <>
      <h2 className="font-bold">Fill Your Personal Data: </h2>
      <div className="divider"></div>
      <InputComponent name="firstName" type="text" label="First name" />
      <InputComponent name="lastName" type="text" label="Last name" />
      <InputComponent name="address1" type="text" label="address" />
      <InputComponent name="address2" type="text" label="address(optional)" />
      <InputComponent name="city" type="text" label="city" />
      <InputComponent name="zip" type="text" label="zip-code" />
      <InputComponent name="country" type="text" label="country" />
      <InputComponent name="email" type="email" label="email address" />
    </>
  );
};

export default FormSecondStep;
