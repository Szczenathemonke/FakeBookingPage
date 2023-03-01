import "./App.css";
import FinalizeReservation from "./components/pages/FinalizeReservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingHomepage from "./components/pages/BookingHomepage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CartProvider from "./components/dataAndFeatures/CartContext";
import StripeCheckout from "./components/dataAndFeatures/StripeCheckout";
import SuccesfulPayment from "./components/pages/SuccesfulPayment";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookingHomepage />} />
            <Route path="finalize" element={<FinalizeReservation />} />
            <Route path="testPayment" element={<StripeCheckout />} />
            <Route path="SuccesfulPayment" element={<SuccesfulPayment />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
