import ServicesImage from "../../../../../public/portfolioImages/services.svg";
import DocumentImage from "../../../../../public/portfolioImages/document.svg";
import UsersImage from "../../../../../public/portfolioImages/users.svg";
import CalenderImage from "../../../../../public/portfolioImages/calender.svg"; // Corrected the import name to match the file name

const Services = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 py-10">
        <div className="flex-1">
          <img src={ServicesImage.src} alt="servicesImages" className="img-fluid" />
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <h2 className="font-bold text-3xl lg:pl-4">Our Services</h2>
          <ServicesCardData />
        </div>
      </div>
    </div>
  );
};

const ServicesCardData = () => {
  const servicesData = [
    {
      id: 1,
      imgsrc: DocumentImage,
      title: "Real Estate",
      description:
        "We offer the opportunity to invest with a minimum amount in profitable real estate assets on the Nue platform.",
    },
    {
      id: 2,
      imgsrc: CalenderImage, // Corrected the variable name to match the imported name
      title: "Investment",
      description:
        "Commercial properties are considered one of the best types of real estate investments because of their potential for higher cash flow.",
    },
    {
      id: 3,
      imgsrc: UsersImage,
      title: "Sukuk",
      description:
        "Sukuk holders will receive 97.5% of the real estate acquired by the SPV rent after deducting all costs related to the management and maintenance of the real estate asset.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 max-w-[95%]">
      {servicesData.map((service) => (
        <div key={service.id} className="col-span-1 flex flex-col items-center lg:items-start relative px-4">
          <div className="flex items-end lg:relative lg:left-[-15%] lg:mb-[-10%] md:mb-[-8%] sm:mb-[-2%]">
            <img src={service.imgsrc.src} className="" alt="" />
          </div>
          <h3 className="font-semibold text-xl md:text-start text-center md:mt-1 mt-[-30px]">{service.title}</h3>
          <p className="lg:text-start text-center">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
