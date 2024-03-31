import { BsFillHouseLockFill } from "react-icons/bs";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { VscGraphLine } from "react-icons/vsc";

export default function ProprtyDeatails() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 border-b-2 py-2">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
          2 Bed in Hidaya Tower
        </h1>
        <div className="text-xs lg:text-lg flex gap-4 items-center divide-x-2 divide-gray-400 font-semibold">
          <span>2 bed</span>
          <span className="pl-2">2 bath</span>
          <span className="pl-2">1,273 sq.ft</span>

          <span className="pl-2">Hidaya Towers</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 py-2 border-b-2">
        {detailsdata.map((item, index) => (
          <div key={index} className="flex items-center gap-5">
            {item.img ? (
              <div className="w-10 aspect-square rounded-full overflow-hidden flex justify-center items-center">
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvb6lty4oibQZ9PBaFtxLOsimTLoB5iITctl3vzXE1PWBory93Xi4SJaZQ4AzTLjK9tM&usqp=CAU"
                  }
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            ) : (
              <item.Icon className="text-3xl" />
            )}
            <div className="flex flex-col gap2">
              <h1 className="lg:text-xl font-semibold text-gray-800">
                {item.title}
              </h1>
              <p className="text-gray-600 text-xs lg:text-md">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const detailsdata = [
  {

    title: "Riyad Saudia Arabia",

    sub: "A mature real estate market with a high return on investment",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvb6lty4oibQZ9PBaFtxLOsimTLoB5iITctl3vzXE1PWBory93Xi4SJaZQ4AzTLjK9tM&usqp=CAU",
  },
  {
    title: "Rented",
    sub: "Currently occupied and professionally managed by our team",
    Icon: BsFillHouseLockFill,
  },
  {
    title: "Current rent is SAR 15,000 per month",
    sub: "Distributed monthly among all investors after standard charges and fees",
    Icon: HiOutlineCircleStack,
  },
  {
    title: "7.53% annual gross yield",
    sub: "With a net yield of 6% and a price per square foot of SAR 1,877",
    Icon: VscGraphLine,
  },
];
