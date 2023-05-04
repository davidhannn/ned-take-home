import TextInput from "./text-input";
import { CONFIG } from "@/constants/enums";
import CardWrapper from "./card-wrapper";
import React from "react";
import Slider from "./range-slider";
import styles from "../styles/text.module.css";

const Finance: React.FC = () => {
  return (
    <CardWrapper>
      <h1 className={styles.headerText}>Financing Options</h1>
      <p className="text-3x1 font-bold underline">
        What is your annual business revenue? *
      </p>
      <TextInput config={CONFIG.REVENUE_AMOUNT} />

      <p>What is your desired loan amount?</p>
      <Slider />
      <p>Revenue share percentage: </p>

      <p>Revenue Shared Frequency</p>
      <p>Desired Repayment Delay</p>
      <p>What will you use the funds for?</p>
    </CardWrapper>
  );
};

export default React.memo(Finance);
