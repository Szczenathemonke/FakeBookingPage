import { useState, useEffect, useContext } from "react";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutComponent from "./CheckoutComponent";
import { CartContext } from "../features/CartContext";
import { useFormikContext } from "formik";
import { Values } from "../MultiPageForm";
import { useQueryClient } from "@tanstack/react-query";

type roomOrder = {
  rooms_order: { room_Id: number; start_date: string; end_date: string }[];
  address_details: {
    email: string;
    billing_street: string;
    billing_street_add?: string | undefined;
    billing_postcode: string;
    billing_country: string;
  };
};

// API key od marcina
const stripePromise = loadStripe(
  "pk_test_51MSE0PCQmntgWt5LTKGdk1Djar53wMGGUiQe2CX3BzBe3r7bwRoCKk32h6NfDmsUfqezdx7DhOr0gKPgukwXdu0a0018BsLp5u"
);

function translateShipping() {
  const { values, setFieldValue } = useFormikContext<Values>();
  const roomOrder: roomOrder = {
    rooms_order: [],
    address_details: {
      email: `${values.email}`,
      billing_street: `${values.address1}`,
      billing_street_add: `${values.address2}`,
      billing_postcode: `${values.zip}`,
      billing_country: `${values.country}`,
    },
  };

  roomOrder.rooms_order = values.reservation.slice(0, 1);

  return roomOrder;
}

function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const [orderId, setOrderId] = useState<number | null>(null);
  const cart = useContext(CartContext);

  // tutaj podać przedmioty z koszyka

  const queryClient = useQueryClient();

  useEffect(() => {
    fetch("https://hotels.niezniszczalny-chinczyk.com/order", {
      method: "POST",
      body: JSON.stringify(translateShipping()),
    })
      .then((res) => res.json())
      .then((data) => setOrderId(data.order_id));
  }, []);

  useEffect(() => {
    fetch(
      `https://hotels.niezniszczalny-chinczyk.com/order/${orderId}/payment`,
      {
        method: "POST",
        body: JSON.stringify(translateShipping()),
      }
    ).then((res) =>
      res.json().then((data) => setClientSecret(data.clientSecret))
    );
  }, []);

  const appearance: Appearance = {
    theme: "night",
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutComponent />
        </Elements>
      )}
    </>
  );
}

export default StripeCheckout;
