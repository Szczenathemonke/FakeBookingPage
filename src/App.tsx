import "./App.css";
import FinalizeReservation from "./components/pages/FinalizeReservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingHomepage from "./components/pages/BookingHomepage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import RoomList from "./components/features/RoomList";
import CartProvider from "./components/features/CartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookingHomepage />} />
            <Route path="finalize" element={<FinalizeReservation />} />
            <Route path="roomList" element={<RoomList />} />
            {/* <Route path="testPayment" element={} /> */}
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
