import CardWrapper from "./card-wrapper";
import styles from "../styles/text.module.css";
import { useContext } from "react";
import { FinanceContext } from "@/pages";
import {
  getDesiredFeePercentage,
  getExpectedCompletionDate,
  getExpectedTransfers,
} from "@/utils";
import { CONFIG, REVENUE_SHARED_FREQUENCY } from "@/constants/enums";

const Results: React.FC = () => {
  const {
    revenueAmount,
    fundingAmount,
    financeData,
    revenueSharedFrequency,
    desiredRepaymentDelay,
  } = useContext(FinanceContext);

  const feePercentage = parseFloat(
    financeData[CONFIG.DESIRED_FEE_PERCENTAGE]?.value
  );

  const desiredFeePercentage = getDesiredFeePercentage(
    feePercentage,
    fundingAmount
  );
  const totalRevenueShare =
    fundingAmount + getDesiredFeePercentage(feePercentage, fundingAmount);

  const sharedFrequency =
    revenueSharedFrequency === REVENUE_SHARED_FREQUENCY.MONTHLY ? 12 : 52;

  const expectedTransfers =
    getExpectedTransfers(
      totalRevenueShare,
      sharedFrequency,
      revenueAmount,
      feePercentage
    ) ?? "";

  const expectedCompletionDate =
    getExpectedCompletionDate(expectedTransfers, desiredRepaymentDelay) ?? "";

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
          {`(${feePercentage * 100}%)`} ${desiredFeePercentage}
        </p>
      </div>

      <div className="flex flex-row justify-between mb-8">
        <p className="result-text">Total Revenue Share</p>
        <p>
          $ {totalRevenueShare}
          {/* {fundingAmount +
            getDesiredFeePercentage(feePercentage, fundingAmount)} */}
        </p>
      </div>

      <div className="flex flex-row justify-between mb-8">
        <p className="result-text">Expected Transfers</p>
        <p>{expectedTransfers}</p>
      </div>

      <div className="flex flex-row justify-between mb-8">
        <p className="result-text">Expected Completion Date</p>
        <p>{expectedCompletionDate}</p>
      </div>
    </CardWrapper>
  );
};

export default Results;
