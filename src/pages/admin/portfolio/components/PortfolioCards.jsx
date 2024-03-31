// import React from 'react'

// function PortfolioCards() {
//   return (
//     <div>P</div>
//   )
// }

// export default PortfolioCards


import { Card } from "@mui/material";
import React from "react";

function PortfolioCard({ item }) {
  return (
    <div className="mb-2 mt-3 grid">
      <Card
        className="border shadow-none py-9 px-3 lg:w-96 w-full"
        key={item.id}
      >
        <div className="grid grid-cols-2 justify-between">
          <p className="text-sm text-black">{item.title}</p>
          <p className="text-base text-black text-end">{item.balance}</p>
        </div>
      </Card>
    </div>
  );
}

function PortfolioCards() {
  return (
    <div className="walletcard-wrapp">
      <h1 className="text-start text-black text-[24px] font-normal">Portfolio</h1>
      <div className="justify-content-start">
        {PortfolioCardsData?.map((item, index) => (
          <PortfolioCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioCards;

export const PortfolioCardsData = [
  {
    id: 1,
    title: "Portfolio Value",
    balance: "SAR 0",
  },

  // {
  //   id: 2,
  //   title:"Rewards Balance",
  //   btn: "Show rewards",
  //   balance:"SAR 0",
  // },
];
