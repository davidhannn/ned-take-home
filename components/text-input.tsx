import { useContext } from "react";
import { FinanceContext } from "@/pages";
import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import variables from "../styles/variables.module.scss";

type Props = {
  config?: string;
};

const TextInput = ({ config }: Props) => {
  const { financeData, revenueAmount, setRevenueAmount, handleRevenueInput } =
    useContext(FinanceContext);
  const configObject = financeData[config];
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");

  return (
    <NumberInput
      placeholder={configObject?.placeholder}
      onChange={(valueString) => setRevenueAmount(parse(valueString))}
      value={format(revenueAmount)}
      bgColor={"rgba(196, 196, 196, 0.15)"}
      outline={"none"}
      borderRadius={8}
      mt={2}
      // max={50}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default TextInput;

// const TextInput = ({ config }: Props) => {
//   const { financeData, handleRevenueInput } = useContext(FinanceContext);

//   const configObject = financeData[config];

//   return (
//     <input
//       className="text-input"
//       placeholder={configObject?.placeholder}
//       inputMode="numeric"
//       onChange={handleRevenueInput}
//     />
//   );
// };

// export default TextInput;
