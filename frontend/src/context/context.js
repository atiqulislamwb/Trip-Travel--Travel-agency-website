import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import app from "../firebase/firebase.js";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Spinner } from "flowbite-react";

export const StateContext = createContext();

const auth = getAuth(app);

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    signOut(auth)
      .then((abc) => {
        console.log(abc);
        setUser({});
        toast.success("Sign Out successfully", { autoClose: 1000 });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://asg-111.vercel.app/services")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          setServices(data?.data);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });
    return () => {
      unSubscribed();
      setLoading(false);
    };
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center mt-[300px] sm:mt-[450px]">
        {" "}
        <Spinner
          size="xl"
          color="purple"
          aria-label="Extra large spinner example"
        />
      </div>
    );

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        dark,
        setDark,
        loading,
        setLoading,
        services,
        reviews,
        setReviews,
        handleLogout,
        toggle,
        setToggle,
        refresh,
        setRefresh,
        services,
        setServices,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
