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

export function translateShipping() {
  const { values } = useFormikContext<Values>();
  const roomOrder: RoomOrder = {
    rooms_order: [],
    address_details: {
      email: `${values.email}`,
      billing_city: `${values.city}`,
      billing_street: `${values.address1}`,
      billing_street_add: `${values.address2}`,
      billing_postcode: `${values.zip}`,
      billing_country: `${values.country}`,
    },
  };
  values.reservation.forEach((e) => roomOrder.rooms_order.push(e));
  roomOrder.rooms_order.shift();

  return roomOrder;
}

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

// const getPaymentIntent = useQuery(["paymentIntent"], () =>
//   fetch(
//     `https://hotels.niezniszczalny-chinczyk.com/order/${orderId}/payment`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newOrder),
//     }
//   )
//     .then((res) => res.json())
//     .then((data) => setClientSecret(data.client_secret))
// );

// setOrderId(getOrderId.data);

// const getPaymentIntent = useQuery(
//   ["paymentIntent"],
//   async () =>
//     await fetch(
//       `https://hotels.niezniszczalny-chinczyk.com/order/${orderId}/payment`,
//       {
//         method: "POST",
//       }
//     ).then((res) => res.json())
// );
// setClientSecret(getPaymentIntent.data);

// const getPaymentIntent = useQuery(
//   ["paymentIntent"],
//   async () =>
//     await fetch(
//       `https://hotels.niezniszczalny-chinczyk.com/order/${orderId}/payment`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newOrder),
//       }
//     ).then((res) => res.json())
// );
// setClientSecret(getSecretKey.data);

//   .then((data) =>
//   fetch(
//     `https://hotels.niezniszczalny-chinczyk.com/order/${data}/payment`,
//     {
//       method: "POST",
//       body: JSON.stringify(translateShipping()),
//     }
//   )
// )
// .then((res) => res.json())
// .then((data) => setClientSecret(data.clientSecret))

// const testOrderId: roomOrder = {
//   rooms_order: [
//     { room_id: 1, start_date: "2023-01-26", end_date: "2023-01-26" },
//   ],
//   address_details: {
//     email: "test@test.pl",
//     billing_street: "testowa",
//     billing_street_add: "testowa2",
//     billing_city: "wroclaw",
//     billing_postcode: "51-111",
//     billing_country: "polska",
//   },
// };
// tutaj podać przedmioty z koszyka

// const getOrderId = useQuery(["orderId"], async () => {
//   return await fetch("https://hotels.niezniszczalny-chinczyk.com/order", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newOrder),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       setOrderId(data.order_id);
//       return fetch(
//         `https://hotels.niezniszczalny-chinczyk.com/order/${data.order_id}/payment`,
//         { method: "POST" }
//       );
//     })
//     .then((res) => res.json())
//     .then((data) => setClientSecret(data.client_secret));
// });
