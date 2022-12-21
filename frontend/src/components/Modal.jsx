import React, { useContext } from "react";
import { StateContext } from "../context/context";
import { format } from "date-fns";

const Modal = ({ information, selected, setInformation }) => {
  const date = format(selected, "PP");
  const { user } = useContext(StateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const time = e.target.slot.value;
    const phone = e.target.phone.value;
    const data = {
      service_name: information?.name,
      date,
      apointment_time: time,
      user_name: user.displayName,
      phone_number: phone,
      user_email: user.email,
    };
    e.target.reset();
    console.log(data);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex flex-col gap-3">
            <p className="text-2xl">{information?.name}</p>
            <p className="text-xl">{date}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              {information?.slots?.length > 0 ? (
                <select name="slot" className="select w-full max-w-xs">
                  {information?.slots?.map((slot) => (
                    <option key={`date-${slot}`} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              ) : (
                <p> No slots available</p>
              )}
              <input
                type="text"
                name="name"
                disabled
                placeholder="Name"
                defaultValue={user?.displayName}
                className="input w-full max-w-xs mt-3"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="input w-full max-w-xs mt-3"
              />
              <input
                type="email"
                disabled
                defaultValue={user?.email}
                className="input w-full max-w-xs mt-3"
              />
              <button
                className="btn mt-3 border-none bg-gradient-to-r from-violet-500 to-fuchsia-500"
                type="submit"
                disabled={information?.slots?.length === 0}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
