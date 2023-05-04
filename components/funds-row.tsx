import { CONFIG } from "@/constants/enums";
import { FinanceContext } from "@/pages";
import { Select } from "@chakra-ui/react";
import { useContext } from "react";

const FundsRow: React.FC = () => {
  const { financeData } = useContext(FinanceContext);

  const fundOptions = financeData[CONFIG.USE_OF_FUNDS]?.value.split("*");

  console.log(fundOptions, "fund options");
  return (
    <div className="flex flex-row w-full">
      <Select>
        {fundOptions?.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </Select>

      <input className="text-input" placeholder="Description" />
      <input className="text-input" placeholder="Amount" />
    </div>
  );
};

export default FundsRow;
