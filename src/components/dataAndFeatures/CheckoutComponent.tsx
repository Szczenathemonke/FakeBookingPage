import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import HeaderHomepage from "../homepage/Header";

function CheckoutComponent() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://127.0.0.1:5173/succesfulPayment",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(`${error.message}`);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="min-h-screen max-h-full pb-10 bg-gradient-to-br from-emerald-100 to-emerald-300">
        <HeaderHomepage isCart={false} />
        <div className="flex flex-row m-10 items-center justify-center ">
          <form
            id="payment-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-stretch"
          >
            <div>
              <PaymentElement
                id="payment-element"
                options={paymentElementOptions}
              />
            </div>
            <button
              disabled={isLoading || !stripe || !elements}
              id="submit"
              className="btn bg-emerald-500 border-none rounded-lg"
            >
              <span id="button-text">
                {isLoading ? (
                  <div className="spinner" id="spinner"></div>
                ) : (
                  "Pay now"
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CheckoutComponent;
