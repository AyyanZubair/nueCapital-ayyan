// import { Card } from "@mui/material";
// import React from "react";

// function BankCards({ item }) {
//   return (
//     <div className="mb-2 mt-3">
//       <Card
//         className="border shadow-none py-4 px-3 w-full"
//         key={item.id}
//       >
//         <div className="grid grid-cols-2">
//           <p className="text-base text-black">{item.title}</p>
//           <div className="flex justify-end">
//             <button className="border-0 bg-themeDarkGreen py-2 text-white rounded-md w-24">
//               {item.btn}
//             </button>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 mt-4 items-center">
//           <p className="text-base text-black text-start">{item.balance}</p>
//           <div className="flex justify-end">
//               <button className="border border-themeDarkGreen py-2 text-black rounded-md w-24">
//                 {item.withdraw}
//               </button>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }

// function BankCardsWrapper() {
//   return (
//     <div className="grid lg:grid-cols-2 grid-cols-1">
//       <h1 className="text-start text-black text-[24px] font-normal">Wallet</h1>
//       <h1 className="text-start text-black text-[24px] font-normal">Wallet</h1>
//       <div className="">
//         {WalletCardsData?.map((item, index) => (
//           <BankCards item={item} key={index} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BankCardsWrapper;

// export const WalletCardsData = [
//   {
//     id: 1,
//     title: "Cash Balance",
//     btn: "Deposit",
//     balance: "0",
//     withdraw: "Withdraw",
//   },

//   {
//     id: 2,
//     title:"Rewards Balance",
//     btn: "Show rewards",
//     balance:"SAR 0",
//     btn: "Deposit",
//   },
// ];

import { Card } from "@mui/material";
import React from "react";
import { FaPlus } from "react-icons/fa6";

function BankCards({ item }) {
  return (
    <div className="mb-2 mt-3">
      <Card className="border shadow-none py-4 px-3 w-full" key={item.id}>
        <div className="grid grid-cols-2">
          <p className="text-base text-black">{item.title}</p>
          <div className="flex justify-end">
            <button className="flex items-center border-0 bg-themeDarkGreen py-2 text-white rounded-md w-28 justify-center">
            <FaPlus className="mr-2" />
              {item.btn}
            </button>
          </div>
        </div>
        <p className="text-base text-black text-start mt-8">
       

          {item.balance}
        </p>
      </Card>
    </div>
  );
}

function BankCardsWrapper() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <h1 className="text-start text-black text-[24px] font-normal">Virtual Card</h1>
      <h1 className="text-start text-black text-[24px] font-normal">Bank</h1>
      {WalletCardsData?.map((item, index) => (
        <BankCards item={item} key={index} />
      ))}
    </div>
  );
}

export default BankCardsWrapper;

export const WalletCardsData = [
  {
    id: 1,
    title: "Credit Card",
    btn: "Add Card",
    balance: "Instant deposit from anywhere in the world",
  },
  {
    id: 2,
    title: "Wire Transfer",
    btn: "Add Bank",
    balance: "4 working days to deposit from anywhere in the world",
  },
];
