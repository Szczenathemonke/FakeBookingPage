import { Formik, FormikProps, Form } from "formik";
import { createContext, useRef, useState } from "react";
import { z } from "zod";
import FormFirstStep from "./FormFirstStep";
import FormSecondStep from "./FormSecondStep";
import FormSummary from "./FormSummary";
import FormSwitch from "./FormSwitch";
import FormThirdStep from "./FormThirdStep";
import InputComponent from "./InputComponent";
export type Values = {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  birth: number;
};
const zodValidation = z.object({
  firstName: z.string({ message: "Required Field!" }).max(15).min(1),
  lastName: z.string(),
  phone: z.number(),
  email: z.string().min(1).email({ message: "Invalid email address" }),
  birth: z.date(),
});
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
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            birth: "",
          }}
          validationSchema={zodValidation}
          onSubmit={(values) => {
            // formValues.current(JSON.stringify(values))
            alert(JSON.stringify(values));
          }}
        >
          {(formProps) => (
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
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setPage((old) => old + 1)}
                    >
                      next
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
