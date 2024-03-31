import { Card } from "@mui/material";
import React from "react";

function FinancialCards({ item }) {
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

function FinancialCardsWrapper() {
  return (
    <div className="walletcard-wrapp mt-3">
      <h1 className="text-start text-black text-[24px] font-normal">Financials</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {FinancialCardsData?.map((item, index) => (
          <FinancialCards item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default FinancialCardsWrapper;

export const FinancialCardsData = [
  {
    id: 1,
    title: "Monthly Income",
    balance: "SAR 0",
  },
  {
    id: 2,
    title: "Total Income",
    balance: "SAR 0",
  },
  {
    id: 3,
    title: "Capital Appreciation",
    balance: "SAR 0",
  },
];
