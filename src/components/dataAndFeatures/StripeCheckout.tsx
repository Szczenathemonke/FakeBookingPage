import { useState, useContext } from "react";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutComponent from "./CheckoutComponent";
import { CartContext } from "./CartContext";
import { useFormikContext } from "formik";
import { Values } from "../form/MultiPageForm";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export type RoomOrder = {
  rooms_order: { room_id: number; start_date: string; end_date: string }[];
  address_details: {
    email: string;
    billing_city: string;
    billing_street: string;
    billing_street_add?: string | undefined;
    billing_postcode: string;
    billing_country: string;
  };
};

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PKEY);

function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const [orderId, setOrderId] = useState<number | null>(null);
  const newOrder = useContext(CartContext);

  const fetchSecret = async () => {
    await fetch("https://hotels.niezniszczalny-chinczyk.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder?.translatedOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderId(data.order_id);
        return fetch(
          `https://hotels.niezniszczalny-chinczyk.com/order/${data.order_id}/payment`,
          { method: "POST" }
        );
      })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.client_secret));

    return clientSecret;
  };
  const getSecret = useQuery(["getSecret"], fetchSecret);

  const appearance: Appearance = {
    theme: "flat",
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
