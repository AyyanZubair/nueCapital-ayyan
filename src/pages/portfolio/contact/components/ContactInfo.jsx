// import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";

const ContactInfo = () => {
  return (
    <>
      <p className="text-white text-lg mt-10 ml-10 text-start font-bold font-family: 'Poppins', sans-serif;">
        Contact Information
      </p>
      <p className="text-white text-base font-normal text-start mt-4 ml-10 font-family: 'Poppins', sans-serif;">
        Say something to start a live chat!
      </p>
      <div className="text-white mt-24 ml-10">
        <p className="text-base flex items-center font-normal font-family: 'Poppins', sans-serif;">
          <span className="mr-4">
            <PiPhoneCallFill />{" "}
          </span>
          +966 3456 789
        </p>
        <p className="mt-14 text-base flex items-center  font-normal font-family: 'Poppins', sans-serif;">
          <span className="mr-4">
            <FaEnvelope />
          </span>{" "}
          contact@nuecapital.com
        </p>
        <p className="mt-14 flex items-center  text-base font-normal font-family: 'Poppins', sans-serif;">
          <span className="mr-4">
            <FaMapMarkerAlt />{" "}
          </span>
          Office 182, Level 1, Dammam Saudi Arabia
        </p>
      </div>
    </>
  );
};

export default ContactInfo;
