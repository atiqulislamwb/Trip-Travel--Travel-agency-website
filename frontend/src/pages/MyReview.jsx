import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { StateContext } from "../context/context";
import ReviewTable from "./../components/ReviewTable";
import { Helmet } from "react-helmet";
const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const { user, setLoading, handleLogout, refresh } = useContext(StateContext);

  useEffect(() => {
    setLoading(true);
    fetch(`https://asg-111.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        if (data.status === "success") {
          setReviews(data?.data);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, [user?.email, refresh]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Reviews</title>
      </Helmet>
      {reviews?.length === 0 ? (
        <div className="flex items-center justify-center">
          You have no Review
        </div>
      ) : (
        <div className="w-full h-[70vh] overflow-y-auto mt-10">
          <ReviewTable reviews={reviews} />
        </div>
      )}
    </div>
  );
};

export default MyReview;
