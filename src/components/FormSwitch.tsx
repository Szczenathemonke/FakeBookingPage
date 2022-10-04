import FormFirstStep from "./MultiPageForm";
import FormSecondStep from "./FormSecondStep";
import FormSummary from "./FormSummary";
import FormThirdStep from "./FormThirdStep";

const FormSwitch = (step: number) => {
  switch (step) {
    case 0:
      return <FormFirstStep />;
    case 1:
      return <FormSecondStep />;
    case 2:
      return <FormThirdStep />;
    case 3:
      return <FormSummary />;
    default:
      return <FormFirstStep />;
  }
};

export default FormSwitch;
