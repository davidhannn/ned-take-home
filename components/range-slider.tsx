import { CONFIG } from "@/constants/enums";
import { FinanceContext } from "@/pages";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  useRangeSlider,
} from "@chakra-ui/react";
import { useContext } from "react";
import variables from "../styles/variables.module.scss";

const Slider: React.FC = () => {
  const {
    financeData,
    revenueAmount,
    fundingAmount,
    handleFundingAmount,
    setFundingAmount,
  } = useContext(FinanceContext);

  const fundingAmountMin = parseInt(
    financeData[CONFIG.FUNDING_AMOUNT_MIN]?.value
  );

  const fundingAmountMax = parseInt(
    financeData[CONFIG.FUNDING_AMOUNT_MAX]?.value
  );

  let max = revenueAmount / 3;

  console.log(max, "max");
  console.log(fundingAmountMax, "funding maount max");
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-full mr-6 ">
        <div className="flex flex-row justify-between mb-4">
          <p>{fundingAmountMin}</p>
          <p>
            {revenueAmount === 0
              ? fundingAmountMax
              : fundingAmountMax <= max
              ? fundingAmountMax
              : max}
          </p>
        </div>
        <RangeSlider
          defaultValue={[25000, max]}
          // defaultValue={[0, max]}
          aria-label={["min", "max"]}
          onChange={handleFundingAmount}
          min={0}
          max={max}
          step={1000}
        >
          <RangeSliderTrack bg="#C4C4C4">
            <RangeSliderFilledTrack bg={variables.sliderBlue} />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </div>
      <input
        placeholder={fundingAmount.toString()}
        style={{
          backgroundColor: "rgba(196, 196, 196, 0.15)",
          borderRadius: "10px",
          boxShadow: "0px 3px 20px 6px rgba(0, 0, 0, 0.02)",
          width: "20%",
          padding: "4px 8px",
          color: variables.sliderBlue,
          fontWeight: 700,
          fontSize: "18px",
        }}
        onChange={(e) => {
          setFundingAmount(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Slider;
