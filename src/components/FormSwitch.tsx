import FormFirstStep from "./MultiPageForm";
import FormSecondStep from "./FormSecondStep";
import FormSummary from "./FormSummary";
import FormThirdStep from "./FormThirdStep";

type SwitchProps = {
  step: number;
};

const FormSwitch = (step, formProps) => {
  switch (step) {
    case 0:
      return <FormFirstStep formProps={formProps} />;
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
