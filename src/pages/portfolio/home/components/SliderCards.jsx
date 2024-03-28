/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

// import { FaStar } from "react-icons/fa";
import { register } from "swiper/element/bundle";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import MainCard from "./MainCard";

// register Swiper custom elements
register();

function SliderCards() {
  const container = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="xl:max-w-7xl lg:max-w-[75rem] mx-auto pt-8">
      <h1 className="font-bold text-themeDarkGreen text-center text-3xl pb-5">
        Featured Properties
      </h1>

      <div className="relative">
        <swiper-container
          ref={container}
          slides-per-view={width < 600 ? "1" : width < 1000 ? "2" : "3"}
          speed="500"
          loop="true"
          space-between="30"
        >
          {ApplicationInterfaceSliderData.map((i, index) => (
            <Slide
              key={index}
              {...i}
              rating={4.9}
              location="Riyadh, Saudi Arabia"
              category={"Luxary Villa"}
            />
          ))}
        </swiper-container>
        <button
          className="absolute left-0 top-[50%] -translate-y-1/2 z-[1000]"
          onClick={() => container.current.swiper.slidePrev()}
        >
          <FaChevronCircleLeft className="text-themeDarkGreen text-3xl bg-white rounded-full" />
        </button>
        <button
          className="absolute right-0 top-[50%] -translate-y-1/2 z-[1000]"
          onClick={() => container.current.swiper.slideNext()}
        >
          <FaChevronCircleRight className="text-themeDarkGreen text-3xl bg-white rounded-full" />
        </button>
      </div>
    </section>
  );
}

const Slide = (props) => {
  return (
    <swiper-slide>
      <MainCard {...props} />
    </swiper-slide>
  );
};

export default SliderCards;

 const ApplicationInterfaceSliderData = [
  {
    id: 1,
    imgsrc:
      "https://benkhan.com/images/articles/Riyadh-The-Dead-Center-of-the-Saudi-Arabia-Kingdom1[1].jpg",
    title: "Rijal Almaa Heritage Village",
    category: "Upcoming",
    annualreturn: "9.9%",
    fundeddate: "2 March 2024",
    evaluation: "SAR 240,000,00",
    price: "220,000,00",
    investor: "79 investors",
  },
  {
    id: 2,
    imgsrc:
      "https://argaamplus.s3.amazonaws.com/ae7dfaf8-e4f9-4297-8846-4aa2a72a2d81.png",
    title: "Tribble Story House ",
    category: "Available",
    annualreturn: "9.7%",
    fundeddate: "4 March 2024",
    evaluation: "SAR 290,000,00",
    price: "270,000,00",
    investor: "90 investors",
  },
  {
    id: 3,
    imgsrc:
      "https://images.squarespace-cdn.com/content/v1/5db2c1c870cf53160ba6a917/1638823013907-ZX9LS2Y2RVWAX9EWC1K9/5.jpg",
    title: "Ritz-Carlton Residences",
    category: "Upcoming",
    annualreturn: "9.37%",
    fundeddate: "9 March 2024",
    evaluation: "SAR 10,000,00",
    price: "8,000,0",
    investor: "56 investors",
  },
  {
    id: 4,
    imgsrc:
      "https://leadpakistan.com.pk/news/wp-content/uploads/2022/06/Saudi-Arabia-plans-to-build-worlds-largest-building-ever.jpg",
    title: "The Ritz-Carlton Residences",
    category: "Available",
    annualreturn: "9.58%",
    fundeddate: "2 feb 2024",
    evaluation: "SAR 200,000,00",
    price: "190,000,00",
    investor: "83 investors",
  },
  {
    id: 5,
    imgsrc:
      "https://media.istockphoto.com/id/1349273101/photo/kingdom-of-saudi-arabia-riyadh-king-abdullah-financial-district-january-31-2020-large.jpg?s=612x612&w=0&k=20&c=tBg1nVc-YzK0uudCyRatXmQqQFF7DXSDRjJ1WRfWZso=",
    title: "Golden Tower, Ash Sahti",
    category: "Closed",
    annualreturn: "9.89%",
    fundeddate: "1 feb 2024",
    evaluation: "SAR 100,000,00",
    price: "90,000",
    investor: "63 investors",
  },
  {
    id: 6,
    imgsrc:
      "https://ees-int.com/sites/default/files/styles/scale_and_crop_500px_x500px/public/2021-12/KAFD%20-%201.jpeg?h=b24b6c4b&itok=nfixf16Z",
    title: "Sky Dandelions House",
    category: "Upcoming",
    annualreturn: "9.87%",
    fundeddate: "4 Jan 2024",
    evaluation: "SAR 290,000,00",
    price: "240,000,0",
    investor: "43 investors",
  },
];