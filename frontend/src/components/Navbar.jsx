import React, { useContext } from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { StateContext } from "../context/context";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { signOut, getAuth } from "firebase/auth";
import app from "../firebase/firebase";
import logo from "../assets/logo.png";
import { GiCrossedSwords } from "react-icons/gi";
import { CgMenuHotdog } from "react-icons/cg";
const Nav = () => {
  const { dark, setDark, user, handleLogout, setUser, toggle, setToggle } =
    useContext(StateContext);
  const Navs = () => (
    <div className="mr-10 flex sm:flex-row flex-col ">
      <Link
        className="text-lg font-semibold sm:mr-10 mt-2 sm:mt-0 text-center"
        to="/"
        onClick={() => setToggle(false)}
      >
        Home
      </Link>

      <Link
        className="text-lg font-semibold sm:mr-10  mt-2 sm:mt-0 text-center"
        to="/blog"
        onClick={() => setToggle(false)}
      >
        Blog
      </Link>
      <Link
        className="text-lg font-semibold sm:mr-10  mt-2 sm:mt-0 text-center"
        to="/booking"
        onClick={() => setToggle(false)}
      >
        Booking Appointment
      </Link>

      <Link
        className="text-lg font-semibold sm:mr-10 mt-2 sm:mt-0 text-center"
        to="/services"
        onClick={() => setToggle(false)}
      >
        Services
      </Link>

      {user?.uid && (
        <Link
          className="text-lg font-semibold sm:mr-10 mt-2 sm:mt-0 text-center"
          to="/add-service"
          onClick={() => setToggle(false)}
        >
          {" "}
          Add Service
        </Link>
      )}

      {user?.uid && (
        <Link
          className="text-lg font-semibold sm:mr-10 mt-2 sm:mt-0 text-center"
          to="/my-review"
          onClick={() => setToggle(false)}
        >
          {" "}
          My Review
        </Link>
      )}

      {dark ? (
        <button
          className="text-lg font-semibold mt-2 sm:mt-0 sm:mb-2 mr-10 flex items-center justify-center"
          onClick={() => setDark(!dark)}
        >
          <BsFillMoonFill size={20} />
        </button>
      ) : (
        <button
          className="text-lg font-semibold sm:mr-10 mt-2 sm:mb-2 sm:mt-0 flex items-center justify-center"
          onClick={() => setDark(!dark)}
        >
          <BsFillSunFill size={20} />
        </button>
      )}

      {user?.uid ? (
        <div className="flex flex-col   sm:flex-row">
          <div className="flex items-center justify-center mt-2 sm:mt-0">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-10 h-10 mr-3  rounded-full text-center sm:mr-4 ml-6 m-2 sm:m-0 sm:ml-0  "
              title={user?.displayName}
            />
          </div>
          <button
            className="border-2  mt-2 sm:mt-0 border-[#328EF0] mr-1  px-3 font-bold text-black rounded-xl py-2 "
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="mt-10 sm:mt-0">
          <Link
            className="bg-[#328EF0] hover:bg-[#1c66b4] px-6  sm:mt-2 mr-4 text-white rounded-xl py-3  "
            to="/login"
            onClick={() => setToggle(false)}
          >
            Login
          </Link>
          <Link
            className="border-2 hover:bg-slate-200 border-[#328EF0] mr-1 sm:mt-2  px-3 text-black rounded-xl py-2 "
            to="/register"
            onClick={() => setToggle(false)}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
  return (
    <>
      <div
        className={`navbar  p-4 shadow-xl ${dark ? "bg-black" : "bg-white"} `}
      >
        <div className="flex-1">
          <Link to="/" className="flex items-center justify-center">
            <img
              src={logo}
              className=" w-[200px] h-[70px]  sm:w-[300px] sm:h-[68px] object-cover "
            />
          </Link>
        </div>
        <div className=" hidden md:block">
          <ul className="menu menu-horizontal p-0 mr-5 ">
            <Navs />
          </ul>
        </div>

        {/* mobile menu */}
        <div className="absolute text top-15 right-10 md:hidden ">
          {toggle ? (
            <GiCrossedSwords
              size={32}
              color="red"
              onClick={() => setToggle((prevState) => !prevState)}
            />
          ) : (
            <CgMenuHotdog
              size={32}
              color="green"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>

        {toggle && (
          <div
            className={`transition-all absolute top-0 h-screen    w-2/3 opacity-100   bg-white backdrop-blur-lg z-10
            p-6 md:hidden  ${toggle ? "left-0 " : "-left-full"} `}
          >
            <ul className="flex flex-col p-0 absolute top-10 ">
              <Link to="/">
                <img
                  src={logo}
                  className=" w-[200px] h-[70px]  sm:w-[300px] sm:h-[68px] object-cover "
                />
              </Link>
              <Navs />
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
