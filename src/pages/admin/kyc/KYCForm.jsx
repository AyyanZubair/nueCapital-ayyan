/* eslint-disable react/prop-types */
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { PiHouseLine } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { PiBuildings } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import Link from "next/link";

export default function KYCForm() {
  return (
    <div className="flex flex-col gap-7 xl:h-screen overflow-hidden">
      <h1 className="font-semibold text-2xl text-center text-md-start">
        Address Verification
      </h1>
      <div className="flex items-center gap-3">
        <IoShieldCheckmarkOutline className="text-5xl" />
        <p className="max-w-xs">
          NUE regulations require us to confirm your residential address before
          you can invest on our platform.
        </p>
      </div>
      <main className=" flex gap-2 flex-col max-h-full overflow-auto">
        {links.map((li, i) => (
          <Navigation key={i} {...li} index={i} />
        ))}
      </main>
      <div className="text-lg font-medium text-green-500 text-center cursor-pointer">
        Do this later
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
const Navigation = ({ Icon, text, index }) => {
  return (
    <Link
      href={`/admin/kyc/uploadpage?page=${index + 1}`}
      className="p-2 rounded-md cursor-pointer hover:bg-gray-200 transition-all duration-300 bg-gray-50 flex items-center gap-5"
    >
      <div className="p-2 rounded-full bg-green-100">
        <Icon className="lg:text-2xl text-lg" />
      </div>
      <p className="flex-1 font-medium text-xs lg:text-md">{text}</p>
      <FaChevronRight />
    </Link>
  );
};

const links = [
  {
    Icon: IoKeyOutline,
    text: "I own my home",
  },
  {
    Icon: PiHouseLine,
    text: "I am the registered tenanat of a rental property",
  },
  {
    Icon: IoIosPeople,
    text: "I share my accomodation and I am not the regitered tenant",
  },
  {
    Icon: PiBuildings,
    text: "I am staying in a hotle apartment for at least 3 months",
  },
  {
    Icon: IoBriefcaseOutline,
    text: "I live in a company sponsored residence",
  },
  {
    Icon: FaRegCircleQuestion,
    text: "My residential situation is not listed here",
  },
];
