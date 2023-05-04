import TextInput from "./text-input";
import { CONFIG } from "@/constants/enums";

const Finance: React.FC = () => {
  return (
    <div>
      <p>What is your annual business revenue? *</p>
      <TextInput config={CONFIG.REVENUE_AMOUNT} />

      <p>What is your desired loan amount?</p>

      <p>Revenue share percentage: </p>

      <p>Revenue Shared Frequency</p>
      <p>Desired Repayment Delay</p>
      <p>What will you use the funds for?</p>
    </div>
  );
};

export default Finance;
