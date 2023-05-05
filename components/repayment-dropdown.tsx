import { CONFIG } from "@/constants/enums";
import { FinanceContext } from "@/pages";
import { parseDesiredRepaymentDelay } from "@/utils";
import { Select } from "@chakra-ui/react";

import { useContext } from "react";

const RepaymentDropdown: React.FC = () => {
  const { financeData, setDesiredRepaymentDelay } = useContext(FinanceContext);

  const repaymentDelayOptions =
    financeData[CONFIG.DESIRED_REPAYMENT_DELAY]?.value.split("*");

  return (
    <Select onChange={(e) => setDesiredRepaymentDelay(e.target.value)}>
      {repaymentDelayOptions?.map((option) => (
        <option value={parseDesiredRepaymentDelay(option)}>{option}</option>
      ))}
    </Select>
  );
};

export default RepaymentDropdown;
