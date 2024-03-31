import React, { useState } from "react";
import { CiGlobe } from "react-icons/ci";

import riyalImage from "../../../../public/portfolioImages/currency-riyal.svg";

import currencyImage from "../../../../public/portfolioImages/currency.svg";
import { FaChevronDown } from "react-icons/fa";
import { MenuItem, Select } from "@mui/material";
import Image from "next/image";

const Preferences = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");

  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";

  return (
    <>
      <h1 className="text-start text-black text-[24px] font-normal lg:mb-0 mb-4">Preferences</h1>
      <div className="text-start grid lg:grid-cols-4 grid-cols-1">
        <div class="flex items-center lg:mb-0 mb-4">
          <div class="shadow-lg  w-9 h-9 border rounded-full flex justify-center items-center">
            <CiGlobe className="text-themeDarkGreen font-bold text-[17px]" />
          </div>
          <p className="text-[20px] font-bold text-themeDarkGreen ml-3">
            Languages
          </p>
        </div>
        <Select
          className=""
          displayEmpty
          value={selectedLanguage}
          onChange={(event) => setSelectedLanguage(event.target.value)}
          style={{ width: "100%" }}
        >
          <MenuItem disabled value="">
            <div className="custom-dropdown flex items-center justify-center">
              {selectedLanguage ? (
                <>
                  {selectedLanguage}
                  <FaChevronDown className="text-black ps-2 text-lg" />
                </>
              ) : (
                <span className="d-flex justify-content-between p-2">
                  <p className="select-options">Select Language</p>
                  <FaChevronDown className="text-end text-black ps-2 text-lg" />
                </span>
              )}
            </div>
          </MenuItem>
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Arabic">Arabic</MenuItem>
        </Select>
      </div>
      <div className="text-start grid lg:grid-cols-4 grid-cols-1 mt-4">
        <div class="flex items-center lg:mb-0 mb-4">
          <div class="shadow-lg  w-9 h-9 border rounded-full flex justify-center items-center ">
            <Image src={riyalImage} alt="riyalImage" fluid />
          </div>
          <p className="text-[20px] font-bold text-themeDarkGreen ml-3">
            Currency
          </p>
        </div>
        <div className="flex items-center border rounded-lg px-2 py-2">
          <Image src={currencyImage} alt="currencyImage" fluid />
          <span className="ml-4 text-black">Saudi Arabia Riyal</span>
        </div>
      </div>
      <h1 className="text-[27px] mt-7 text-themeDarkGreen mb-3">Marketing Emails</h1>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <p className="secondpara">
          Receive newsletters, promotional offers, new property launch emails
          and more.
        </p>
        <div
          className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-themeDarkGreen rounded-full p-1 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <div
            className={
              "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>
      </div>
    </>
  );
};

export default Preferences;
