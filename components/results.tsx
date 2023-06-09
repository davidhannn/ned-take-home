import CardWrapper from "./card-wrapper";
import styles from "../styles/text.module.css";
import { useContext } from "react";
import { FinanceContext } from "@/pages";
import {
  getDesiredFeePercentage,
  getExpectedCompletionDate,
  getExpectedTransfers,
  getRevenueSharePercentage,
} from "@/utils";
import { CARDTYPES, CONFIG, REVENUE_SHARED_FREQUENCY } from "@/constants/enums";

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

  const revenueSharePercentage =
    getRevenueSharePercentage(revenueAmount, fundingAmount) / 100;

  const expectedTransfers = getExpectedTransfers(
    totalRevenueShare,
    sharedFrequency,
    revenueAmount,
    revenueSharePercentage
  ).toFixed(0);

  const repaymentDelay =
    revenueSharedFrequency === REVENUE_SHARED_FREQUENCY.MONTHLY ? 30 : 7;

  const expectedCompletionDate =
    getExpectedCompletionDate(expectedTransfers, repaymentDelay) ?? "";

  return (
    <CardWrapper cardType={CARDTYPES.RESULTS}>
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
        <p>{isNaN(expectedTransfers) ? 0 : expectedTransfers}</p>
      </div>

      <div className="flex flex-row justify-between mb-8">
        <p className="result-text">Expected Completion Date</p>
        <p>
          {expectedCompletionDate === "Invalid Date"
            ? ""
            : expectedCompletionDate}
        </p>
      </div>
    </CardWrapper>
  );
};

export default Results;
