import React from "react";
import Services from "./../pages/Services";

const BookingCard = ({ services, setInformation }) => {
  return (
    <div className="max-w-[1440px] mx-auto  ">
      <div className="grid items-center justify-center  sm:grid-cols-3  sm:mt-10 gap-5 p-2 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 sm:px-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md card-compact w-96  shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title text-white">{service.name}</h2>
              <p className="text-white">{service.slots[0]}</p>
              <p className="text-white">
                {service.slots.length}{" "}
                {`${service.slots.length > 1 ? "slots" : "slot"}`} available
              </p>
              <div className="card-actions justify-end">
                <label
                  disabled={service?.slots?.length === 0}
                  onClick={() => setInformation(service)}
                  htmlFor="booking-modal"
                  className="px-5 py-3 cursor-pointer text-white font-semibold shadow-xl rounded-md  bg-gradient-to-r from-purple-500 to-pink-500 "
                >
                  Book Appointment
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCard;
