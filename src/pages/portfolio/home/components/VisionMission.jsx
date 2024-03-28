/* eslint-disable react/prop-types */
import vision from '../../../../../public/portfolioImages/vision.svg'; 
import mission from '../../../../../public/portfolioImages/mission.svg'; 
import React from 'react'; // Don't forget to import React

const VisionMission  = ({ imgsrc, heading, text }) => {
  return (
    <div className="flex flex-col gap-4 lg:text-start text-center">
      <img src={imgsrc.src} className="w-16" alt="" />
      <h2 className="text-4xl lg:text-start text-center">{heading}</h2>
      <p className="text-lg lg:text-start text-center">{text}</p>
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
    <section className="bg-themeGreenL1 rounded-xl py-12 px-5 flex justify-between flex-col md:flex-row gap-5 max-w-7xl mx-auto my-5">
      {VisionMissionData.map((val) => {
        return (
          <div key={val.id} className="flex-1">
            <VisionMission
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
