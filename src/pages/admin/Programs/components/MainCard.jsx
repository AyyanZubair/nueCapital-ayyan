/* eslint-disable react/prop-types */
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Card({
  imgsrc,
  category,
  title,
  price,
  investor,
  annualreturn,
  fundeddate,
  evaluation,
  location,
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const x = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(x);
  }, []);
  
return loading ? (
    <CradLoader />
  ) : (
    <Link
      href="/admin/detail"
      className="grid grid-cols-1 overflow-hidden	 rounded-xl shadow-[0_0_5px] shadow-gray-300 my-2 mx-1"
    >
      <div className="overflow-hidden col-span-1  flex justify-center items-center">
        <img
          src={imgsrc}
          alt="image"
          className="object-cover w-full h-[250px]"
        />
      </div>
      <div className="col-span-1 flex flex-col justify-between items-center sm:items-center gap-2 p-2 mx-3 mb-3">
        <div className="w-full md:text-start text-center">
          <span className="text-white bg-themeDarkGreen rounded-xl py-1 px-2 w-max text-xs">
            {category}
          </span>
        </div>
        <div className="md:text-start text-center w-full">
          <h3 className="text-themeDarkGreen text-xl font-semibold md:text-start text-center">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-1 w-full md:justify-start justify-center md:text-start text-center">
          <FaLocationDot className="text-themeDarkGreen" />
          <span className="text-themeDarkGreen">{location|| "Riyadh, Saudi Arabia" }</span>
        </div>
      </div>
      <div className="flex justify-between mx-4 mb-3">
        <p className="text-xl text-themeDarkGreen font-bold">SAR {price}</p>
        <p className="text-gray-400 text-sm font-semibold">{investor}</p>
      </div>
      <div className="border-0 bg-[#F6F7F9] rounded-lg px-3 py-3 mx-2 mb-3">
        <div className="flex justify-between mb-2">
          <p className="text-sm text-themeDarkGreen font-medium">
            Annaulised return
          </p>
          <p className="text-black text-sm font-semibold">{annualreturn}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-sm text-themeDarkGreen font-medium">Funded date</p>
          <p className="text-black text-sm font-semibold">{fundeddate}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-themeDarkGreen font-medium">
            Current evaluation
          </p>
          <p className="text-black text-sm font-semibold">{evaluation}</p>
        </div>
      </div>
    </Link>
  );
}

const CradLoader = () => {
  return (
    <div className="w-full h-[500px] rounded-xl bg-gray-200 flex flex-col gap-2 p-2">
      <div className="rounded-xl h-[250px] skeleton-loading"></div>
      <div className="rounded h-[25px] skeleton-loading"></div>
      <div className="rounded h-[20px] skeleton-loading"></div>
      <div className=" rounded h-[20px] skeleton-loading"></div>
    </div>
  );
};
