import { CONFIG } from "@/constants/enums";
import { FinanceContext } from "@/pages";
import { Select } from "@chakra-ui/react";
import AddSvg from "@/public/Group.svg";
import { useContext } from "react";
import Image from "next/image";

const FundsRow: React.FC = () => {
  const { financeData } = useContext(FinanceContext);

  const fundOptions = financeData[CONFIG.USE_OF_FUNDS]?.value.split("*");

  return (
    <div className="flex flex-row w-full mt-8">
      <Select size="lg" width={150}>
        {fundOptions?.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </Select>

      <input
        style={{
          backgroundColor: "rgba(196, 196, 196, 0.15)",
          outline: "none",
          borderRadius: "10px 10px 0px 0px",
          padding: "4px 12px",
          width: "50%",
          marginLeft: "20px",
        }}
        placeholder="Description"
      />
      <input
        style={{
          backgroundColor: "rgba(196, 196, 196, 0.15)",
          outline: "none",
          borderRadius: "10px 10px 0px 0px",
          padding: "4px 12px",
          width: "20%",
          marginLeft: "20px",
        }}
        placeholder="Amount"
      />

      <Image priority src={AddSvg} alt="add-button" />
    </div>
  );
};

export default FundsRow;
