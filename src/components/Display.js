import React from "react";
import tw from "tailwind-styled-components";
import { useSelector } from "react-redux";

const Display = () => {
  const { number, CalculationShown } = useSelector(
    (state) => state.display.value
  );
  const result = useSelector((state) => state.calculator.value);
  const theme = useSelector((state) => state.theme.value);

  const displayClass = theme === 1 ? "bg-t_one_screen text-t_one_calc" : theme === 2 ? "bg-t_two_screen text-t_two_calc" : "bg-t_three_screen text-t_three_calc"

  const outputValue = () => {
    let displayedValue = CalculationShown ? result : number;
    displayedValue = displayedValue !== 0 ? Math.round(parseFloat(displayedValue)*1000000)/1000000 : 0;
    return displayedValue;
  };


  return <Container className={displayClass}
  >{outputValue()}</Container>;
};

export default Display;

const Container = tw.div`
    flex
    w-full
    h-[88px]
    rounded-lg
    bg-t_one_screen
    text-white
    justify-end
    items-center
    text-4xl
    px-6
    font-semibold
    mb-6
`;
