import { Select } from "@chakra-ui/react";

const Dropdown: React.FC = () => {
  return (
    <Select placeholder="Select option">
      <option value="option1">30 Days</option>
      <option value="option2">60 Days</option>
      <option value="option3">90 Days</option>
    </Select>
  );
};

export default Dropdown;
