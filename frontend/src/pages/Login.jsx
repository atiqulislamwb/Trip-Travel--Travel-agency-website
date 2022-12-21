import React, { useContext } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { BsGoogle } from "react-icons/bs";
import app from "../firebase/firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { StateContext } from "../context/context";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
const auth = getAuth(app);

const Login = () => {
  const { user, setUser, setLoading } = useContext(StateContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  let location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setUser(user);

        const currentUser = {
          email: user.email,
        };
        fetch("https://asg-111.vercel.app/auth/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data?.status === true) {
              localStorage.setItem("token", data?.token);
              setLoading(false);
              navigate(from, { replace: true });
            }
          })
          .catch((error) => console.log(error));

        toast.success("user login successfully", { autoClose: 2000 });
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally((solve) => {
        console.log(solve);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setLoading(true);
        const user = result.user;
        setUser(user);
        const currentUser = {
          email: user.email,
        };
        setLoading(false);
        fetch("https://asg-111.vercel.app/auth/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === true) {
              localStorage.setItem("token", data?.token);
              navigate(from, { replace: true });
            }
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login Page- login to access all services</title>
      </Helmet>
      <div className="w-9/12 mx-auto mt-10 mb-20 sm:w-[50vh] ">
        <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
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
          <div className="flex flex-col items-start">
            <Button
              className=" w-[40vw] sm:w-[10vw] "
              gradientDuoTone="cyanToBlue"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
        <Button
          onClick={handleGoogleLogin}
          gradientDuoTone="greenToBlue"
          className=" w-[40vw] sm:w-[10vw] mt-4"
        >
          <BsGoogle className="mx-4" />
          Google Log in
        </Button>
      </div>
    </div>
  );
};

export default Login;
