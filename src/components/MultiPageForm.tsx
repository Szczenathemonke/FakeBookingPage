import { Formik, FormikProps, Form } from "formik";
import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import FormFirstStep from "./FormFirstStep";
import FormSecondStep from "./FormSecondStep";
import FormSummary from "./FormSummary";
import FormThirdStep from "./FormThirdStep";

export type Values = {
  checkIn: string;
  checkOut: string;

  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
  country: string;
  email: string;
};

// form level validation poniżej -> problem z walidacją podczas przechodzenia przyciskami -> przyciski działają cały czas
const zodValidationStep1 = z.object({
  checkIn: z.date({ required_error: "Required Field!" }),
  checkOut: z.date({ required_error: "Required Field!" }),
});
const zodValidationStep2 = z.object({
  firstName: z.string({ required_error: "Required Field!" }).max(15).min(1),
  lastName: z.string({ required_error: "Required Field!" }).max(15).min(1),
  address1: z.string({ required_error: "Required Field!" }).min(1),
  address2: z.string(),
  city: z.string({ required_error: "Required Field!" }),
  zip: z.number(),
  country: z.string(),
  email: z
    .string({ required_error: "Required Field!" })
    .min(1)
    .email({ message: "Invalid email address" }),
});
const zodValidationStep3 = z.object({});

const MultiPageForm = () => {
  // const formValues = useRef();
  const [page, setPage] = useState(0);

  const formSwitch = (page: number) => {
    switch (page) {
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
  // const whichValidation = () => {
  //   if (page === 0) {
  //     toFormikValidationSchema(zodValidationStep1);
  //   } else if (page === 1) {
  //     toFormikValidationSchema(zodValidationStep2);
  //   } else if (page === 2) {
  //     toFormikValidationSchema(zodValidationStep3);
  //   }
  // };
  const formSwitchValidation = (page: number) => {
    switch (page) {
      case 0:
        return toFormikValidationSchema(zodValidationStep1);
      case 1:
        return toFormikValidationSchema(zodValidationStep2);
      case 2:
        return toFormikValidationSchema(zodValidationStep3);
      case 3:
        return toFormikValidationSchema(zodValidationStep1);
      default:
        return toFormikValidationSchema(zodValidationStep1);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <Formik
          initialValues={{
            checkIn: "",
            checkOut: "",

            firstName: "",
            lastName: "",
            address1: "",
            address2: "",
            city: "",
            zip: "",
            country: "",
            email: "",
          }}
          validationSchema={formSwitchValidation(page)}
          onSubmit={(values) => {
            console.log(JSON.stringify(values));
            alert(JSON.stringify(values));
          }}
        >
          {(formProps: FormikProps<Values>) => (
            <Form onSubmit={formProps.handleSubmit}>
              {formSwitch(page)}

              <div className="flex flex-row justify-between">
                <div>
                  {page > 0 && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setPage((old) => old - 1)}
                    >
                      previous
                    </button>
                  )}
                </div>

                <div>
                  {page < 3 && (
                    <button
                      disabled={!(formProps.isValid && formProps.dirty)}
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setPage((old) => old + 1)}
                    >
                      next
                      {/* {page === 3 ? "submit" : "next"} */}
                    </button>
                  )}
                  {page === 3 && (
                    <button className="btn btn-secondary" type="submit">
                      Submit Form
                    </button>
                  )}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MultiPageForm;
