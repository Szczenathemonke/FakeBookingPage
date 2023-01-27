import InputComponent from "../features/InputComponent";
import { translateShipping } from "../features/StripeCheckout";

const FormThirdStep = () => {
  console.log(translateShipping());
  return <>{/* <InputComponent name="birth" type="text" label="birth" /> */}</>;
};

export default FormThirdStep;
