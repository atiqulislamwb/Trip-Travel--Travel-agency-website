import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { StateContext } from "../context/context";
import app from "../firebase/firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const auth = getAuth(app);

const Register = () => {
  const { user, setUser, loading, setLoading } = useContext(StateContext);
  const navigate = useNavigate();
  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    const fullName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imgUrl = e.target.imgUrl.value;

    if (!fullName) {
      alert("Please enter a name");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert(" Please provide correct email address");
      return;
    }
    if (!password) {
      alert("Please enter password");
      return;
    }
    if (!imgUrl) {
      alert("Please enter photo url");
      return;
    }
    if (!email) {
      alert(" Please provide  email address");
      return;
    }
    if (password.length < 6) {
      alert(" Password should be 6 characters");
      return;
    }
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setLoading(false);
        toast.success("user created successfully", { autoClose: 1000 });

        e.target.reset();
        updateNameAndPhoto();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });

    const updateNameAndPhoto = () => {
      updateProfile(auth.currentUser, {
        displayName: fullName,
        photoURL: imgUrl,
      })
        .then(() => {
          console.log("display name updated");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register Your Account</title>
      </Helmet>
      <div className="w-9/12  mt-10 sm:w-[50vh] mx-auto ">
        <form className="flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
          <div>
            <div className="mb-2 block">
              <Label value="Your Name" />
            </div>
            <TextInput type="text" name="name" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your email" />
            </div>
            <TextInput type="email" name="email" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your password" />
            </div>
            <TextInput type="password" name="password" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your Image Url" />
            </div>
            <TextInput type="text" name="imgUrl" required={true} />
          </div>

          <Button gradientDuoTone="cyanToBlue" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
