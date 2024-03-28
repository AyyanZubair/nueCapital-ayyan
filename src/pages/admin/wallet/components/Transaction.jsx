import { Card } from "@mui/material";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import TransactionTable from "./TransactionTable";

const Transaction = () => {
  return (
    <div className="transaction d-flex justify-content-center  flex-column">
          <div className="grid grid-cols-1">
                <h1 className="text-start text-black text-[24px] font-normal">Transaction</h1>
                  <TransactionTable/>
          </div>
    </div>
  );
};

export default Transaction;
