import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
const AddServices = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const duration = e.target.duration.value;
    const rating = e.target.rating.value;
    const price = e.target.price.value;
    const image = e.target.image.value;

    const newService = {
      package_name: name,
      description: description,
      duration: duration,
      imgUrl: image,
      rating: rating,
      price: price,
      createdAt: new Date(),
    };

    fetch("https://asg-111.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === true) {
          toast.success(`${data?.message}`, { autoClose: 2000 });
          navigate("/");
          e.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add a new service</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="text-center my-3 text-2xl font-semibold text-blue-500">
        Add A Services
      </div>
      <div className="w-8/12 mx-auto my-5">
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label value="Package Name" />
            </div>
            <TextInput type="text" name="name" required={true} />
          </div>

          <div id="textarea">
            <div className="mb-2 block">
              <Label value="Description" />
            </div>
            <Textarea name="description" required={true} rows={5} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Duration" />
            </div>
            <TextInput type="text" name="duration" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Rating" />
            </div>
            <TextInput type="text" name="rating" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Price" />
            </div>
            <TextInput type="text" name="price" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Image Url" />
            </div>
            <TextInput type="text" name="image" required={true} />
          </div>
          <Button
            gradientDuoTone="cyanToBlue"
            type="submit"
            className="w-[30vw] sm:w-[20vw] font-bold "
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;

// "package_name":"Mango safari to North",
// "description":"Explore North Bengal and South, Mango Production and selling local market.Experience life and sights of north-western Bangladesh where the best archaeological sites of the country are located. Start with visiting Puthia, a village full of bewitching temples ornate with beautiful terracotta describing epic Hindu stories. Then visit Gaur, the lost and historic capital of ancient Bengal. After that, visit Kusumba Mosque, a beautiful stone-built mosque from the 16th century, and Somapura Mahavihara - the second largest Buddhist monastery south of the Himalayas from the 8th century and a UNESCO world heritage site. ",
// "duration":"10 days 10 night",
// "imgUrl":"http://bdtours.net/wp-content/uploads/2018/06/northbanner-2.jpg",
// "rating":4.9,
//price
