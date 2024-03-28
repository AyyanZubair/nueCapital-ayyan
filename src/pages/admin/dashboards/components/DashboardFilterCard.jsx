import { useState } from "react";
import MainCard from "../components/MainCard";

function DashboardFilterCard() {
  const [activeFilter, setActiveFilter] = useState("All");

  const toggleFilter = (filter) => {
    console.log(filter);
    setActiveFilter(filter);
  };

  const filteredData = () => {
    if (activeFilter === "All") {
      return ApplicationInterfaceSliderData;
    }
    
return ApplicationInterfaceSliderData.filter(
      (item) => item.category === activeFilter
    );
  };

  return (
    <section className="mt-28">
      <div className="container">
        <div className="max-w-[34rem]" >
        <div className="grid grid-cols-1 flex-col sm:flex-row justify-center  ">
          <div className="grid grid-cols-1 ">
            <div className="shadow-lg border-0 rounded-[49px] mb-7 p-2 flex justify-between flex-grow-1 ">
              <button
                type="button"
                className={`border-0 py-2 md:px-4 px-3 rounded-[25px] text-sm md:text-base  ${
                  activeFilter === "All" ? "bg-themeDarkGreen text-white " : ""
                }`}
                onClick={() => toggleFilter("All")}
              >
                All
              </button>
              <button
                type="button"
                className={`border-0 py-2 md:px-4 px-2 rounded-[25px] text-sm md:text-base ${
                  activeFilter === "Available"
                    ? " bg-themeDarkGreen text-white "
                    : ""
                }`}
                onClick={() => toggleFilter("Available")}
              >
                Available
              </button>
              <button
                type="button"
                className={`border-0 py-2 md:px-4 px-2 rounded-[25px] text-sm md:text-base ${
                  activeFilter === "Upcoming"
                    ? "bg-themeDarkGreen text-white"
                    : ""
                }`}
                onClick={() => toggleFilter("Upcoming")}
              >
                Upcoming
              </button>
              <button
                type="button"
                className={`border-0 py-2 md:px-4  px-2 rounded-[25px] text-sm md:text-base ${
                  activeFilter === "Closed"
                    ? "bg-themeDarkGreen text-white"
                    : ""
                }`}
                onClick={() => toggleFilter("Closed")}
              >
                Closed
              </button>
            </div>
          </div>
        </div>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {filteredData().map((i, indx) => (
            <MainCard {...i} key={indx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DashboardFilterCard;

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