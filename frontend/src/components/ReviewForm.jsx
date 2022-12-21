import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { StateContext } from "../context/context";

const ReviewForm = ({ service }) => {
  const { user, setLoading, refresh, setRefresh } = useContext(StateContext);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const rating = e.target.rating.value;
    const newReview = {
      package_id: service?._id,
      package_name: service?.package_name,
      package_imgUrl: service?.imgUrl,
      comment: comment,
      rating: rating,
      user_img: user?.photoURL,
      email: user?.email,
      user_name: user?.displayName,
      createdAt: new Date(),
    };
    setLoading(true);
    fetch("https://asg-111.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          toast.success(`${data?.message}`, { autoClose: 1500 });
          e.target.reset();

          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };
  return (
    <div>
      <form action="" onSubmit={handleReviewSubmit}>
        <div>
          <div className="mb-2 block mt-8">
            <label className="text-black text-xl mt-3 font-serif my-4">
              Write A Review
            </label>
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            name="comment"
            required={true}
            rows={6}
            className="sm:w-[50vw] w-[70vw] "
          />
        </div>
        <TextInput
          placeholder="Rating"
          name="rating"
          required={true}
          className="w-40 sm:w-52 mt-1"
        />
        <Button
          type="submit"
          gradientDuoTone="greenToBlue"
          className="mb-3 mt-2 px-8"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
