import { Avatar } from "flowbite-react";
import React from "react";

const AllReviews = ({ service }) => {
  return (
    <div className=" flex-col items-start hidden">
      <div className="flex flex-col items-start justify-center gap-6">
        {service?.reviews?.map((review) => (
          <div
            key={review?.comment}
            className="w-[70vw] h-auto  border border-gray-400 text-left"
          >
            <div className="flex items-center justify-center ">
              <div className="p-4">
                <Avatar
                  size="xl"
                  className="object-fit"
                  img={review?.user_img}
                  rounded={true}
                ></Avatar>
              </div>
              <div>
                <p> Review: "{review?.comment}"</p>
                <p>Rating : {review?.rating}</p>
                <p>Published : 2 days ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
