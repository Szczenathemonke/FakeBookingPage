import "./App.css";
import FinalizeReservation from "./components/FinalizeReservation";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import BookingHomepage from "./components/BookingHomepage";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoomList from "./components/RoomList";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookingHomepage />} />
          <Route path="finalize" element={<FinalizeReservation />} />
          <Route path="roomList" element={<RoomList />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
