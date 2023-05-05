import { RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { REVENUE_SHARED_FREQUENCY } from "@/constants/enums";
import { useContext } from "react";
import { FinanceContext } from "@/pages";

const RadioButton: React.FC = () => {
  const { setRevenueSharedFrequency } = useContext(FinanceContext);

  return (
    <RadioGroup
      defaultValue={REVENUE_SHARED_FREQUENCY.MONTHLY}
      onChange={setRevenueSharedFrequency}
    >
      <Stack spacing={5} direction="row" ml={8}>
        <Radio colorScheme="blue" value={REVENUE_SHARED_FREQUENCY.MONTHLY}>
          Monthly
        </Radio>
        <Radio colorScheme="blue" value={REVENUE_SHARED_FREQUENCY.WEEKLY}>
          Weekly
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default RadioButton;
