import React, { useEffect, useState } from "react";
import BookingCard from "../components/BookingCard";
import BookingHeader from "../components/BookingHeader";
import Modal from "../components/Modal";
import Products from "../constants/data.js";
const Booking = () => {
  const [selected, setSelected] = useState(new Date());
  const [services, setServices] = useState(Products);
  const [information, setInformation] = useState(null);

  return (
    <div className="overflow-hidden">
      <BookingHeader selected={selected} setSelected={setSelected} />
      <div className="p-2 mx-auto">
        <BookingCard services={services} setInformation={setInformation} />
      </div>
      {information && <Modal information={information} selected={selected} />}
    </div>
  );
};

export default Booking;
