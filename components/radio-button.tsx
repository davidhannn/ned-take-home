import { RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { useContext } from "react";

const RadioButton: React.FC = () => {
  return (
    <RadioGroup defaultValue="2">
      <Stack spacing={5} direction="row">
        <Radio colorScheme="red" value="1">
          Monthly
        </Radio>
        <Radio colorScheme="green" value="2">
          Weekly
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export default RadioButton;
