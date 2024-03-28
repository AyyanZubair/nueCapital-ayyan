import { Card } from "@mui/material";
import React from "react";

function WalletCards({ item }) {
  return (
    <div className="mb-2 mt-3 grid">
      <Card
        className="border shadow-none py-4 px-3 lg:w-96 w-full"
        key={item.id}
      >
        <div className="grid grid-cols-2">
          <p className="text-base text-black">{item.title}</p>
          <div className="flex justify-end">
            <button className="border-0 bg-themeDarkGreen py-2 text-white rounded-md w-24">
              {item.btn}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-4 items-center">
          <p className="text-base text-black text-start">{item.balance}</p>
          <div className="flex justify-end">
            {item.id === 1 && ( // Only render if item's ID is 1
              <button className="border border-themeDarkGreen py-2 text-black rounded-md w-24">
                {item.withdraw}
              </button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

function WalletCardsWrapper() {
  return (
    <div className="walletcard-wrapp">
      <h1 className="text-start text-black text-[24px] font-normal">Wallet</h1>
      <div className="justify-content-start">
        {WalletCardsData?.map((item, index) => (
          <WalletCards item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default WalletCardsWrapper;

export const WalletCardsData = [
  {
    id: 1,
    title: "Cash Balance",
    btn: "Deposit",
    balance: "0",
    withdraw: "Withdraw",
  },

  // {
  //   id: 2,
  //   title:"Rewards Balance",
  //   btn: "Show rewards",
  //   balance:"SAR 0",
  // },
];
