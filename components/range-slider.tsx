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
  // const { state, actions } = useRangeSlider();
  const { financeData, revenueAmount, handleFundingAmount } =
    useContext(FinanceContext);

  let max = revenueAmount / 3;
  let defaultValue = [0, 0];
  let min = 0;

  // const {
  //   state,
  //   actions,
  //   getInnerTrackProps,
  //   getInputProps,
  //   getMarkerProps,
  //   getRootProps,
  //   getThumbProps,
  //   getTrackProps,
  // } = useRangeSlider({ min, max, defaultValue });

  return (
    <>
      <p>Min: </p>
      <p>Max: {max}</p>
      <RangeSlider
        defaultValue={[0, max]}
        aria-label={["min", "max"]}
        onChange={handleFundingAmount}
        min={0}
        max={max}
        step={1000}
        // defaultValue={[0, 30]}
      >
        <RangeSliderTrack bg="#C4C4C4">
          <RangeSliderFilledTrack bg={variables.sliderBlue} />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </>
  );
};

export default Slider;
