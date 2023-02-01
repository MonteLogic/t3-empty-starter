import { useContext } from "react";
import { ThemeContext } from "../pages/index";

interface RadioOptionProps {
  value: string;
  label: string;
}

const RadioOption: React.FC<RadioOptionProps> = ({ value, label }) => {
  const { inputValue, setInputVal } = useContext(ThemeContext);
  console.log(inputValue);

  return (
    <>
      <input
        type="radio"
        name="inputValue"
        value={value}
        onChange={(e) => setInputVal(e.target.value)}
        checked={inputValue === value}
      />
      {label}
      <p>{inputValue}</p>
    </>
  );
};

export default function GrandChild(input: any) {
  return (
    <>
      <RadioOption value="value2" label="Make value2" />
      <RadioOption value="value3" label="Make value3" />
      <RadioOption value="value4" label="Make value4" />
    </>
  );
}
