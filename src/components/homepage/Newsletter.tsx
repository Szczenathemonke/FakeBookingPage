import { Form, Formik } from "formik";

import * as Yup from "yup";
import InputComponent from "../form/InputComponent";

function Newsletter() {
  return (
    <div className="h-[260px] bg-emerald-500 flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl">Subscribe</h1>
        <p className="text-xl">And keep track on out latest offers!</p>
        <div className="flex flex-row gap-10 ">
          <Formik
            initialValues={{ newsletter: "" }}
            validationSchema={Yup.object().shape({
              newsletter: Yup.string().email("Invalid email"),
            })}
            onSubmit={(values) => {
              if (values.newsletter !== "") {
                alert("Thank you for subscribing our newsletter!");
              }
            }}
          >
            {(props) => (
              <Form className="flex flex-row gap-4">
                <div>
                  <InputComponent name="newsletter" type="email" />
                </div>
                <button
                  className="btn text-black border-none bg-emerald-100 focus:bg-emerald-100"
                  type="submit"
                >
                  Subscribe
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
