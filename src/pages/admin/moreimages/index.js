/* eslint-disable react/prop-types */
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

export default function MoreImages() {
  const arr = [
    "https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  let chunck = [];
  for (let i = 0; i < arr.length; i += 3) {
    chunck.push(arr.slice(i, i + 3));
  }

  // const location = useRouter();

  // const link =
  //   location.pathname === "/user/more-images"
  //     ? "/user/dashboard-details"
  //     : "/page/details";

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <div>
        <Link
        href='/admin/detail'
          className="font-medium text-lg text-green-500 flex items-center gap-2"
        >
          <IoIosArrowBack /> Back to details
        </Link>
        <p className="text-2xl py-4 font-medium">{arr.length} Photos</p>
      </div>
      <main className="flex flex-col gap-10">
        {chunck.map((el, i) => {
          return i % 2 === 0 ? (
            <LeftGrid key={i} imgs={el} />
          ) : (
            <RightGrid key={i} imgs={el} />
          );
        })}
      </main>
    </div>
  );
}

const LeftGrid = ({ imgs }) => {
  return (
    <div className="grid grid-cols-5 gap-5 lg:max-h-[75vh] ">
      <div className="lg:col-span-3 col-span-full lg:max-h-[75vh] overflow-hidden">
        {imgs[0] && (
          <img
            className="w-full h-full object-cover object-bottom hover:scale-105 transition-all duration-300 rounded-lg"
            src={imgs[0]}
            alt=""
          />
        )}
      </div>
      <div className="lg:col-span-2 col-span-full grid grid-rows-2 gap-5 lg:max-h-[75vh]">
        <div className="overflow-hidden">
          {imgs[1] && (
            <img
              className="w-full h-full object-cover object-bottom hover:scale-105 transition-all duration-300 rounded-lg"
              src={imgs[1]}
              alt=""
            />
          )}
        </div>
        <div className="overflow-hidden">
          {imgs[2] && (
            <img
              className="w-full h-full object-cover object-bottom hover:scale-105 transition-all duration-300 rounded-lg"
              src={imgs[2]}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

const RightGrid = ({ imgs }) => {
  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="lg:col-span-3 col-span-full grid grid-rows-2 gap-5 lg:max-h-[75vh]">
        <div className="overflow-hidden">
          {imgs[0] && (
            <img
              className="w-full h-full object-cover object-bottom hover:scale-105 transition-all duration-300 rounded-lg"
              src={imgs[0]}
              alt=""
            />
          )}
        </div>
        <div className="overflow-hidden">
          {imgs[1] && (
            <img
              className="w-full h-full object-cover object-bottom hover:scale-105 transition-all duration-300 rounded-lg"
              src={imgs[1]}
              alt=""
            />
          )}
        </div>
      </div>

      <div className="lg:col-span-2 col-span-full lg:max-h-[75vh] overflow-hidden">
        {imgs[2] && (
          <img
            className="w-full h-full object-cover object-bottom hover:scale-105 transition-all duration-300 rounded-lg"
            src={imgs[2]}
            alt=""
          />
        )}
      </div>
    </div>
  );
};
