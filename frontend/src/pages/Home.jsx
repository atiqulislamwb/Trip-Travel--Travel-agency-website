import { Button } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Guide from "../components/Guide";
import ServiceItem from "../components/ServiceItem";
import { StateContext } from "../context/context";
import { Helmet } from "react-helmet";
import TravelAdvice from "../components/TravelAdvice";
const Home = () => {
  const { services } = useContext(StateContext);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page-Trip Travel</title>
      </Helmet>
      <div className="">
        <Banner />
      </div>
      <div className="w-8/12 mx-auto ">
        <p className="mt-10 font-mono text-sm text-center ">
          {" "}
          We are the most experienced & Leading tour operator in Bangladesh. Our
          specialty is the best tourist attractions, best locations, best
          itineraries, value for money, professional experienced guide, support
          team, most reliable and trustworthy company. Even we offer something
          extra, an authentic cultural experience, and a responsible approach to
          travel that is sensitive to the impact on the environment and local
          communities. we are combining a sustainable travel approach to
          itineraries designed specifically for people new to Bangladesh travel.
        </p>
        <p className="mt-20  mb-3 italic text-2xl text-center">
          Take a Look at Our
        </p>
      </div>
      <div>
        <p className=" text-5xl mb-3 text-center font-bold">
          MOST POPULAR SERVICES
        </p>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))}
      </div>
      <div className="flex  items-center justify-center my-10">
        <Link to="/services" className="px-6">
          <Button gradientDuoTone="cyanToBlue">Discover More Services</Button>
        </Link>
      </div>
      <div className="w-9/12 mx-auto my-20">
        <TravelAdvice />
      </div>
      <div className="w-9/12 mx-auto my-20">
        <Guide />
      </div>
    </div>
  );
};

export default Home;
