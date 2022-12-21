import { Button, Card } from "flowbite-react";
import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const [text, setText] = useState(service?.description?.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  const handleClick = () => {
    if (!readMore) {
      setReadMore(true);
      setText(service?.description);
    } else {
      setReadMore(false);
      setText(service?.description.slice(0, 100));
    }
  };

  return (
    <div className="mt-10 flex mb-6 flex-col items-center justify-center  ">
      <div className="max-w-sm">
        <Card>
          <PhotoProvider>
            <PhotoView src={service?.imgUrl}>
              <img
                src={service?.imgUrl}
                alt=""
                className="cursor-pointer w-full h-full object-contain"
              />
            </PhotoView>
          </PhotoProvider>

          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {service?.package_name}
          </h5>

          <span className=" font-normal text-gray-700 dark:text-gray-400">
            {text} {!readMore && "..."}
            <span
              onClick={handleClick}
              className="inline cursor-pointer bg-slate-400 text-white rounded-md mt-1 p-1   "
            >
              {readMore ? "Hide" : "Read More"}
            </span>
          </span>

          <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Duration: {service?.duration}
          </h6>
          <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Price: {service?.price} bdt
          </h6>
          <Link to={`/services/${service?._id}`}>
            <Button gradientDuoTone="purpleToBlue">See Details</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default ServiceItem;
