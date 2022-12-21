import React from "react";
import { Avatar } from "flowbite-react";

const FilteredReviews = ({ filteredReviews }) => {
  return (
    <div className="font-serif">
      {filteredReviews.length === 0 ? (
        <div className="text-center text-3xl font-bold my-10 mb-10 ">
          No Review In This Service
        </div>
      ) : (
        <>
          <div className="text-center mt-10 text-xl text-blue-600">
            Some Of Our valuable customer FeedBack
          </div>
          <div className="grid sm:grid-cols-2 sm:p-4">
            {filteredReviews?.map((review) => (
              <div
                key={review?._id}
                className="bg-white m-5 shadow-sm rounded-md  "
              >
                <div className="flex items-center ">
                  <div className="p-4">
                    <Avatar
                      size="xl"
                      className="object-fit  "
                      img={review?.user_img}
                      rounded={true}
                    ></Avatar>
                  </div>
                  <div>
                    <p className="text-black font-bold">
                      {" "}
                      Review: "{review?.comment}"
                    </p>
                    <p className="text-blue-600 text-md text-md font-semibold">
                      Rating : {review?.rating}
                    </p>
                    <p className="text-sm ">
                      Published : {review?.createdAt || "2 days ago"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FilteredReviews;
