import { useContext } from "react";
import { FinanceContext } from "@/pages";

type Props = {
  config?: string;
};

const TextInput = ({ config }: Props) => {
  const { financeData, handleRevenueInput } = useContext(FinanceContext);

  const configObject = financeData[config];

  console.log(configObject);

  return (
    <input
      className="text-input"
      placeholder={configObject?.placeholder}
      inputMode="numeric"
      onChange={handleRevenueInput}
    />
  );
};

export default TextInput;
