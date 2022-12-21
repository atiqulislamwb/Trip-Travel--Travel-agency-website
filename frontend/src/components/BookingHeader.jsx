import React from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const BookingHeader = ({ selected, setSelected }) => {
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = (
      <p className="mt-10 ">
        You picked{" "}
        <span className="text-blue-700 text-xl font-bold">
          {format(selected, "PP")}
        </span>{" "}
        .
      </p>
    );
  }
  return (
    <div>
      <div className="min-h-[50vh] bg-base-100">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="items-center mt-10 mr-8 justify-center mx-auto">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
          </div>
          <div>
            <img
              src="https://blog.punjabads.pk/wp-content/uploads/2022/03/Top-10-Doctors-in-Mardan.jpg"
              className="p-10 hidden sm:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;
