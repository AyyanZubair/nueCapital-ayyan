import { Card } from "@mui/material";
import React from "react";

function InsightsCards({ item }) {
  return (
    <div className="mb-2 mt-3 ">
      <Card
        className="border shadow-none py-9 px-3 lg:w-[96%] w-full"
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

function InsightsCardsWrapper() {
  return (
    <div className="walletcard-wrapp mt-3">
      <h1 className="text-start text-black text-[24px] font-normal">Insights</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {InsightsCardsData?.map((item, index) => (
          <InsightsCards item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default InsightsCardsWrapper;

export const InsightsCardsData = [
  {
    id: 1,
    title: "Number of properties",
    balance: "0",
  },
  {
    id: 2,
    title: "Portfolio occupancy",
    balance: "SAR 0",
  },
];
