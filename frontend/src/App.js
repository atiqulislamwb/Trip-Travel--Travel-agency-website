import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Foot from "./components/Footer";
import Nav from "./components/Navbar";
import { StateContext } from "./context/context";

import {
  Home,
  Blog,
  Error,
  Login,
  Register,
  MyReview,
  AddServices,
  Services,
  ServiceDetail,
} from "./pages";
import Booking from "./pages/Booking";
import EditReview from "./pages/EditReview";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const auth = true;
  return auth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

function App() {
  const { dark } = useContext(StateContext);
  return (
    <div className={`${dark ? "bg-slate-900 text-white" : ""}`}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/edit-review/:editId" element={<EditReview />} />
        <Route path="/my-review" element={<MyReview />} />
        <Route path="/add-service" element={<AddServices />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
