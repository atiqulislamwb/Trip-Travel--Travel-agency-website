import { Button, TextInput } from "flowbite-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ServiceItem from "../components/ServiceItem";
import { StateContext } from "../context/context";
import { Helmet } from "react-helmet";
import Searchbar from "../components/Searchbar";
const Services = () => {
  const [services, setServices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setLoading } = useContext(StateContext);
  const searchRef = useRef(null);
  useEffect(() => {
    fetch(`http://localhost:4000/all-services?search=${searchText}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(true);
        if (data.status === true) {
          setServices(data?.data);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [searchText]);

  const handleSearch = () => {
    setSearchText(searchRef.current.value);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Service Page</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <p className=" mt-4 sm:mt-20  mb-3 italic text-2xl text-center">
          Take a Look at Our
        </p>

        <p className=" text-5xl mb-3 text-center font-bold">
          MOST POPULAR SERVICES
        </p>

        <div className="flex mt-10 flex-row gap-4">
          <div>
            <TextInput
              ref={searchRef}
              type="text"
              placeholder="Search your service"
              required={true}
              className="sm:w-[25vw] "
            />
          </div>
          <Button
            className="sm:px-10"
            gradientDuoTone="pinkToOrange"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service} />
        ))}
      </div>
      <div className="flex items-center justify-center my-4">
        {user?.uid && (
          <Link to="/add-service">
            <Button gradientDuoTone="cyanToBlue"> Add A Services</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Services;
