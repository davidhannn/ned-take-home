import TextInput from "./text-input";
import { CONFIG } from "@/constants/enums";
import CardWrapper from "./card-wrapper";
import React, { useContext } from "react";
import Slider from "./range-slider";
import styles from "../styles/text.module.css";
import { FinanceContext } from "@/pages";
import { getRevenueSharePercentage } from "@/utils";
import variables from "../styles/variables.module.scss";

import FundsRow from "./funds-row";
import RadioButton from "./radio-button";
import RepaymentDropdown from "./repayment-dropdown";

const Finance: React.FC = () => {
  const { revenueAmount, fundingAmount } = useContext(FinanceContext);

  return (
    <CardWrapper>
      <h1 className="header-text">Financing Options</h1>

      <div className="flex flex-col mb-8 mt-10">
        <p>What is your annual business revenue? *</p>
        <TextInput config={CONFIG.REVENUE_AMOUNT} />
      </div>

      <div className="flex flex-col mb-8">
        <p className="mb-2">What is your desired loan amount?</p>
        <Slider />
      </div>

      <div className="flex flex-row mb-8">
        Revenue share percentage:{" "}
        <p
          style={{
            color: variables.sliderBlue,
            marginLeft: "10px",
            fontWeight: 700,
            fontSize: "18px",
          }}
        >
          {getRevenueSharePercentage(revenueAmount, fundingAmount)} %
        </p>
      </div>

      <div className="flex flex-row mb-8">
        <p>Revenue Shared Frequency</p>
        <RadioButton />
      </div>

      <div className="flex flex-row mb-8">
        <p>Desired Repayment Delay</p>
        <RepaymentDropdown />
      </div>

      <div className="flex flex-col">
        <p>What will you use the funds for?</p>
        <FundsRow />
      </div>
    </CardWrapper>
  );
};

export default React.memo(Finance);
