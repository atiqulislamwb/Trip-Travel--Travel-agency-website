import React from "react";
import profile from "../assets/profile.jpg";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
const Guide = () => {
  return (
    <div className="grid sm:grid-cols-2 mt-10 p-3 font-serif">
      <div className="sm:ml-72">
        <img
          src={profile}
          alt="......"
          className="w-[300px] h-[300px] object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center sm:items-start ">
        <p className="text-3xl font-serif mt-10 sm:-mt-3 ">Meet Your Guide</p>
        <div className="w-[230px]  my-1 h-[5px] bg-blue-400"></div>
        <div className="mt-3">
          <p className="text-md">Name: Atiqul islam</p>
          <p>Email: atiqulislamrussell0@gmail.com</p>
          <p>Address: Jashore, Khulna,Bangladesh</p>
          <div className="flex flex-row gap-6 mt-5">
            <BsFacebook
              className=" hover:text-red-500 cursor-pointer"
              color="#328EF0"
              size={35}
            />
            <BsInstagram
              className="text-2xl hover:text-red-500 cursor-pointer"
              color="#328EF0"
              size={35}
            />
            <FiPhoneCall
              className="text-2xl hover:text-red-500 cursor-pointer"
              color="#328EF0"
              size={35}
            />
            <FaFacebookMessenger
              className="text-2xl hover:text-red-500 cursor-pointer"
              color="#328EF0"
              size={35}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
