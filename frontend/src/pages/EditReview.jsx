import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { StateContext } from "../context/context";
import { Helmet } from "react-helmet";
const EditReview = () => {
  const [singleReview, setSingleReview] = useState({});
  const { setLoading, user } = useContext(StateContext);
  const { editId } = useParams();
  const navigate = useNavigate();
  const handleReviewUpdate = (e) => {
    e.preventDefault();
    const newComment = e.target.comment.value;
    const newRating = e.target.rating.value;
    const newReview = {
      package_id: singleReview?.package_id,
      package_name: singleReview?.package_name,
      package_imgUrl: singleReview?.package_imgUrl,
      comment: newComment,
      rating: newRating,
      user_img: user?.photoURL,
      email: user?.email,
      user_name: user?.displayName,
      createdAt: new Date(),
    };
    fetch(`https://asg-111.vercel.app/reviews/${singleReview?._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          toast.success(data.message, { autoClose: 1000 });
          navigate("/my-review");
          e.target.reset();
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(`https://asg-111.vercel.app/reviews/${editId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          setLoading(true);
          setSingleReview(data?.data);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [editId]);

  return (
    <div className="w-6/12 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Edit Your Review</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <form action="" onSubmit={handleReviewUpdate}>
        <div>
          <div className="mb-2 block">
            <Label value="Update Your Review" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            name="comment"
            required={true}
            rows={4}
            defaultValue={singleReview?.comment}
          />
        </div>
        <TextInput
          placeholder="Rating..."
          name="rating"
          required={true}
          className="w-40 mt-1"
          defaultValue={singleReview?.rating}
        />
        <Button type="submit" className="my-3">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditReview;
