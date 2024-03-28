import RealStateImage from "../../../../../public/portfolioImages/realStateImage.svg";

const RealStateImageGrid = () => {
  return (
    <div className="max-w-7xl mx-auto bg-themeGreenL1 lg:items-start md:items-center grid grid-cols-1 md:grid-cols-2 p-3 rounded gap-0 md:gap-5 my-10">
      <div className="col-span-1 overflow-hidden rounded-xl lg:mr-0 md:mr-4 md:block flex justify-center ">
        <img src={RealStateImage.src} alt="SukukImages" />
      </div>

      <div className="col-span-1 flex flex-col gap-4 py-5 md:text-start text-center">
        <h1 className="text-4xl text-themeDarkGreen">
          Mudarabah Sukuk Returns
        </h1>
        <p className="text-themeGreenL2 text-lg lg:max-w-[80%]">
          Sukuk holders will receive 97.5% of the real estate acquired by the
          SPV rent after deducting all costs related to the management and
          maintenance of the real estate asset.
        </p>
      </div>
    </div>
  );
};

export default RealStateImageGrid;
