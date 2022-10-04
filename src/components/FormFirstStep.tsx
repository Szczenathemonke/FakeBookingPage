import { z } from "zod";
import InputComponent from "./InputComponent";

const zodValidation = z.object({
  firstName: z.string({ required_error: "Required Field!" }).max(15).min(1),
});
const FormFirstStep = () => {
  return (
    <>
      <InputComponent name="firstName" type="text" label="First name" />

      <InputComponent name="lastName" type="text" label="Last name" />
    </>
  );
};

export default FormFirstStep;
