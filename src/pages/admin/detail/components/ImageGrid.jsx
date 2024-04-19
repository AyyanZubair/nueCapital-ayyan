import Link from "next/link";
import { useRouter } from "next/router";

/* eslint-disable react/prop-types */
export default function ImageGrid() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {smallImageUrls.map((u, i) => (
          <SmallImage key={i} url={u} index={i} />
        ))}
      </div>
    </main>
  );
}

const SmallImage = ({ url, index }) => {
  const router = useRouter();

  // const link =
  //   router.push === "/components/dashboard-details"
  //     ? "/components/more-images"
  //     : "/components/more-images";


  
return (
    <div className="relative">
      <img src={url} className="rounded w-full h-full object-cover" alt="" />
      {index === 3 && (
        <Link
          href='/admin/moreimages'
          className="bg-white flex justify-center items-center lg:h-12 h-9 rounded-full shadow-md text-green-600 font-semibold absolute -bottom-4 lg:-bottom-6 left-1/2 -translate-x-1/2 text-xs w-[100px] lg:w-[200px] hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          More Images
        </Link>
      )}
    </div>
  );
};

const smallImageUrls = [
  "https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
