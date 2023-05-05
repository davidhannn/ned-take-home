import { CONFIG } from "@/constants/enums";
import { FinanceContext } from "@/pages";
import { Select } from "@chakra-ui/react";
import AddSvg from "@/public/Group.svg";
import { useContext, useId, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import {
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const FundsRow: React.FC = () => {
  const { financeData, saveFundReasons, fundReasons } =
    useContext(FinanceContext);
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [option, setOption] = useState("Marketing");

  // const [formData, setFormData] = useState({
  //   reason: "",
  //   description: "",
  //   amount: 0,
  // });
  const fundOptions = financeData[CONFIG.USE_OF_FUNDS]?.value.split("*");

  const addFundReason = () => {
    const id = uuidv4();
    saveFundReasons({ id, amount, description, option });
  };

  return (
    <div className="flex flex-row w-full mt-8">
      <Select
        size="lg"
        width={150}
        onChange={(e) => setOption(e.target.value)}
        value={option}
      >
        {fundOptions?.map((option, i) => (
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
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        style={{
          backgroundColor: "rgba(196, 196, 196, 0.15)",
          outline: "none",
          borderRadius: "10px 10px 0px 0px",
          padding: "4px 12px",
          width: "20%",
          marginLeft: "20px",
          marginRight: "10px",
        }}
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      {/* <NumberInput
        placeholder="Amount"
        // onChange={(valueString) => setRevenueAmount(parse(valueString))}
        // value={format(revenueAmount)}
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
      </NumberInput> */}

      <div className="flex justify-center" onClick={addFundReason}>
        <Image priority src={AddSvg} alt="add-button" />
      </div>
    </div>
  );
};

export default FundsRow;
