import CardWrapper from "./card-wrapper";
import styles from "../styles/text.module.css";
import { useContext } from "react";
import { FinanceContext } from "@/pages";
import { getDesiredFeePercentage } from "@/utils";
import { CONFIG } from "@/constants/enums";

const Results: React.FC = () => {
  const { revenueAmount, fundingAmount, financeData } =
    useContext(FinanceContext);

  const feePercentage = parseFloat(
    financeData[CONFIG.DESIRED_FEE_PERCENTAGE]?.value
  );

  // console.log(financeData[CONFIG.DESIRED_FEE_PERCENTAGE]?.value);
  // console.log(feePercentage, "fee percentage");

  return (
    <CardWrapper>
      <h1 className="header-text">Results</h1>

      <div className="flex flex-row justify-between mb-8 mt-12">
        <p className="result-text">Annual Business Revenue</p>
        <p>$ {revenueAmount}</p>
      </div>

      <div className="flex flex-row justify-between mb-8">
        <p className="result-text">Funding Amount</p>
        <p>$ {fundingAmount}</p>
      </div>

      <div className="flex flex-row justify-between mb-8">
        <p className="result-text">Fees</p>
        <p>
          {" "}
          {`(${feePercentage * 100}%)`} $
          {getDesiredFeePercentage(feePercentage, fundingAmount)}
        </p>
      </div>

      <div className="flex flex-row justify-between mb-8">
        <p className="result-text">Total Revenue Share</p>
        <p>
          ${" "}
          {fundingAmount +
            getDesiredFeePercentage(feePercentage, fundingAmount)}
        </p>
      </div>

      <div className="flex flex-row justify-between mb-8">
        <p className="result-text">Expected Transfers</p>
        <p>$ {fundingAmount}</p>
      </div>

      <div className="flex flex-row justify-between mb-8">
        <p className="result-text">Expected Completion Date</p>
        <p>$ {fundingAmount}</p>
      </div>
    </CardWrapper>
  );
};

export default Results;
