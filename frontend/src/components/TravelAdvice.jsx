import React from "react";

const TravelAdvice = () => {
  return (
    <div className="mt-10">
      <div className="text-center my-10">
        <p className="text-3xl font-semibold ">Travel Advices</p>
        <div className="w-[200px] mx-auto my-1 h-[5px] bg-blue-400"></div>
      </div>
      <div className="grid sm:grid-cols-3">
        <div className="flex items-center p-2 justify-center">
          <div className="">
            <img
              src="http://tourtoday.com.bd/wp-content/uploads/2017/02/travel-health-advice-250x250.jpg"
              alt="...."
              className="w-40 h-40 object-contain"
            />
          </div>
          <div className="ml-3">
            <p className="text-xl mb-4 font-bold">
              Stay healthy while traveling
            </p>
            <p className="font-semibold text-md">
              Health is the key of happiness. We go for a travel in a variety of
              activities..
            </p>
          </div>
        </div>

        <div className="flex items-center p-2 justify-center">
          <div>
            <img
              src="http://tourtoday.com.bd/wp-content/uploads/2017/02/coxsbazar-turist-police-250x250.jpg"
              alt="..."
              className="w-40 h-40 object-contain"
            />
          </div>
          <div className="ml-3">
            <p className="text-xl mb-4 font-bold">Photographer Uniform</p>
            <p className="font-semibold text-md">
              Cox’s Bazar tourist police distributing uniform to prevent
              harassment of
            </p>
          </div>
        </div>

        <div className="flex items-center p-2 justify-center">
          <div>
            <img
              src="http://tourtoday.com.bd/wp-content/uploads/2017/02/tour-with-baby-250x250.jpg"
              alt="..."
              className="w-40 h-40 object-contain"
            />
          </div>

          <div className="ml-3">
            <p className="text-xl mb-4 font-bold">Travel with Baby/Child</p>
            <p className="font-semibold text-md">
              Tour/Travel always interesting and exciting but after being mom it
              will be difficult.
            </p>
          </div>
        </div>

        <div className="flex items-center p-2 justify-center">
          <div>
            <img
              src="http://tourtoday.com.bd/wp-content/uploads/2017/02/traveler-bags-150x150.jpg"
              alt="..."
              className="w-40 h-40 object-contain"
            />
          </div>
          <div className="ml-3">
            <p className="text-xl mb-4 font-bold">Select Travel Bags</p>
            <p className="font-semibold text-md">
              We need to take extra care about travel bag selection. If your
              travel bag is not
            </p>
          </div>
        </div>
        <div className="flex items-center p-2 justify-center">
          <div>
            <img
              src="http://tourtoday.com.bd/wp-content/uploads/2017/02/travel-dress-150x150.jpg"
              alt="..."
              className="w-40 h-40 object-contain"
            />
          </div>
          <div className="ml-3">
            <p className="text-xl mb-4 font-bold">Dress Selection</p>
            <p className="font-semibold text-md">
              Dress is the key element of comfort and comfort make happy. So we
              need to
            </p>
          </div>
        </div>
        <div className="flex items-center p-2 justify-center">
          <div>
            <img
              src="http://tourtoday.com.bd/wp-content/uploads/2017/02/local-people-150x150.jpg"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-xl mb-4 font-bold">Respect the local people</p>
            <p className="font-semibold text-md">
              If your destination is rural area of Bangladesh you need to
              respect there
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelAdvice;
