import realEstateInvestImage from "../../../../../public/portfolioImages/realEstateInvestImage.svg";
import { FaArrowRight } from "react-icons/fa6";

const ReatEstateInvestGrid = () => {
  return (
    <section className="max-w-7xl mx-auto bg-themeGreenL1 rounded grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 lg:ml-[-52px] lg:mt-[-62px] lg:block flex justify-center">
        <img src={realEstateInvestImage.src} alt="Images" />
      </div>
      <div className="col-span-1 flex flex-col gap-3 p-3 lg:p-5 justify-evenly lg:text-start text-center">
        <h1 className="text-sm font-bold text-themeDarkGreen">REAL ESTATE</h1>
        <h1 className="text-3xl lg:text-4xl text-themeDarkGreen">
          Invest in the real <br></br> Estate
        </h1>
        <p className="lg:text-[18px] text-themeDarkGreen lg:w-3/4">
          NUE is one of the 50 largest real estate private equity investors in
          the world by total annual deployment — deploying more than $1 billion
          of capital annually in 2021 and 2022. Our portfolio is largely
          composed of 20,000+ well-located residential units and e
          Commerce-centric industrial assets.
        </p>
        <p className="font-bold text-themeDarkGreen lg:text-lg flex items-center gap-3 cursor-pointer lg:justify-start justify-center">
          Explore our real estate portfolio
          <span>
            <FaArrowRight />
          </span>
        </p>
      </div>
    </section>
  );
};

export default ReatEstateInvestGrid;
