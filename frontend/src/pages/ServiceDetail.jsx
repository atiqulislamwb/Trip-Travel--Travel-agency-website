import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AllReviews from "../components/AllReviews";
import FilteredReviews from "../components/FilteredReviews";
import ReviewForm from "../components/ReviewForm";
import { StateContext } from "../context/context";
import { Helmet } from "react-helmet";
const ServiceDetail = () => {
  const [service, setService] = useState({});
  const [allReviews, setAllReviews] = useState([]);

  const { setLoading, user, loading, refresh, reviews, setRefresh } =
    useContext(StateContext);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://asg-111.vercel.app/services/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          setService(data?.data);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetch(`https://asg-111.vercel.app/all-reviews`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(true);
        if (data.status === true) {
          setAllReviews(data?.data);
          setRefresh(!refresh);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredReviews = allReviews?.filter(
    (review) => review?.package_id === service?._id
  );

  return (
    <div className="bg-slate-100 mb-10 overflow-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Service Details Page</title>
      </Helmet>
      <div className="w-[100vw] sm:h-[60vh] h-[40vh] ">
        <img
          src={service?.imgUrl}
          alt="location pic"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-9/12 mx-auto font-serif bg-white shadow-sm p-5 rounded-sm mt-10">
        <div className="items-start justify-center my-2 flex flex-col">
          <p className="text-2xl font-bold my-2 ">
            Package Name : {service?.package_name}
          </p>
          <p className="text-lg my-3"> Description : {service?.description}</p>
          <p className="text-xl font-bold"> Duration : {service?.duration}</p>
          <p className="font-semibold text-lg"> Rating : {service?.rating}</p>
          <p className="font-semibold text-blue-800 text-lg">
            Price : {service?.price} BDT
          </p>
        </div>
      </div>
      <div className="w-9/12 mx-auto">
        {user?.uid ? (
          <ReviewForm service={service} />
        ) : (
          <div className="font-serif p-2  my-5 text-2xl font-semibold text-blue-900">
            Please{" "}
            <Link to="/login" className="underline text-blue-600">
              Login
            </Link>{" "}
            to write a review
          </div>
        )}
      </div>
      <div className="sm:w-9/12 w-11/12 mx-auto mb-10">
        <FilteredReviews filteredReviews={filteredReviews} />
        <AllReviews service={service} />
      </div>
    </div>
  );
};

export default ServiceDetail;
