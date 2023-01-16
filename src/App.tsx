import "./App.css";
import FinalizeReservation from "./components/pages/FinalizeReservation";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import BookingHomepage from "./components/pages/BookingHomepage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoomList from "./components/features/RoomList";
import CartProvider from "./components/features/CartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookingHomepage />} />
            <Route path="finalize" element={<FinalizeReservation />} />
            <Route path="roomList" element={<RoomList />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </CartProvider>
  );
}

export default App;
