import React from "react";
import { Card } from "@mui/material";
import riyadh from "../../../../../public/portfolioImages/riyadh.svg";
import albaha from "../../../../../public/portfolioImages/albaha.svg";
import aljawf from "../../../../../public/portfolioImages/aljawf.svg";
import aseerprovince from "../../../../../public/portfolioImages/aseerprovince.svg";
import hailprovince from "../../../../../public/portfolioImages/hailprovince.svg";
import jizanprovince from "../../../../../public/portfolioImages/jizanprovince.svg";
import makkah from "../../../../../public/portfolioImages/makkah.svg";
import qassimprovince from "../../../../../public/portfolioImages/qassimprovince.svg";
import madinah from "../../../../../public/portfolioImages/madinah.svg";

const NeighbhoodDealsCard = () => {
  return (
    <div className="grid grid-cols-3 gap-x-16 px-20 justify-center">
      {neighbourhoodData.map((item) => (
       <div className="mb-5 " key={item.id}>
       <Card className="dealCard mb-4">
         <div className="col-spacing flex items-center">
           <img className="cardImage img-fluid" src={item.imgsrc.src} alt={item.title} />
           <div className="cardText text-end font-bold text-themeDarkGreen text-[14px]">{item.title}</div>
         </div>
       </Card>
     </div>
      ))}
    </div>
  );
};

const neighbourhoodData = [
  {
    id: 1,
    title: "Riyadh",
    imgsrc: riyadh,
  },
  {
    id: 2,
    title: "Makkah",
    imgsrc: makkah,
  },
  {
    id: 3,
    title: "Madinah",
    imgsrc: madinah,
  },
  {
    id: 4,
    title: "Al Baha",
    imgsrc: albaha,
  },
  {
    id: 5,
    title: "Al Jawf",
    imgsrc: aljawf,
  },
  {
    id: 6,
    title: "Qassim Province",
    imgsrc: qassimprovince,
  },
  {
    id: 7,
    title: "Ha'il Province",
    imgsrc: hailprovince,
  },
  {
    id: 8,
    title: "Jizan Province",
    imgsrc: jizanprovince,
  },
  {
    id: 9,
    title: "Aseer Province",
    imgsrc: aseerprovince,
  },
];

export default NeighbhoodDealsCard;
