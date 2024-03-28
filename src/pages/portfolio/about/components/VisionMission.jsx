/* eslint-disable react/prop-types */
import vision from '../../../../../public/portfolioImages/vision.svg'; 
import mission from '../../../../../public/portfolioImages/mission.svg'; 
import React from 'react'; // Don't forget to import React

const VisionMission  = ({ imgsrc, heading, text }) => {
  return (
    <div className="flex flex-col gap-4 text-center -start">
      <div className="flex items-center md:justify-start justify-center gap-3">
        <img src={imgsrc.src}  alt="" className="w-16" />
        <h2 className="text-4xl">{heading}</h2>
      </div>

      <p className="text-lg md:text-start text-center">{text}</p>
    </div>
  );
}

const VisionMissionWrapper = () => {
  const VisionMissionData = [
    {
      id: 1,
      imgsrc: vision,
      heading: "Vision",
      text: "We’re reinventing real estate investing to deliver better financial outcomes.",
    },
    {
      id: 2,
      imgsrc: mission,
      heading: "Mission",
      text: "Deliver the best online real estate investing experience and make it easy for individual investors to diversify their portfolios.",
    },
  ];

  return (
    <section className="container mt-10 grid grid-cols-1  md:grid-cols-2 gap-5 max-w-7xl mx-auto">
      {VisionMissionData.map((val) => {
        return (
          <div
            className={`border-0 bg-themelightgreen pt-7 px-5 rounded-[12px] pb-8 h-[80%] mb-5`}
            key={val.id}
          >
            <VisionMission
              id={val.id}
              heading={val.heading}
              text={val.text}
              imgsrc={val.imgsrc}
            />
          </div>
        );
      })}
    </section>
  );
}

export default VisionMissionWrapper;
