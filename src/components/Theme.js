import React from "react";
import tw from "tailwind-styled-components";
import { toggleTheme } from "../redux/themes";
import { useDispatch, useSelector } from "react-redux";

const Theme = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const textColor =
    theme === 1
      ? "text-t_one_calc"
      : theme === 2
      ? "text-t_two_calc"
      : "text-t_three_calc";

  const switchColor =
    theme === 1
      ? "bg-t_one_keypad"
      : theme === 2
      ? "bg-t_two_keypad"
      : "bg-t_three_keypad";
  const dotColor =
    theme === 1
      ? "bg-t_one_resolve_bg hover:bg-t_one_resolve_bg_hover"
      : theme === 2
      ? "bg-t_two_resolve_bg hover:bg-t_two_resolve_bg_hover"
      : "bg-t_three_resolve_bg hover:bg-t_three_key_resolve_bg_hover";

  return (
    <Container>
      <Calc className={textColor}>calc</Calc>
      <Label className={textColor}>Theme</Label>
      <Toggle>
        <ThemeNumbers className={textColor}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </ThemeNumbers>
        <Switch onClick={() => dispatch(toggleTheme())} className={switchColor}>
          <div>{theme === 1 && <RedDot className={dotColor} />}</div>
          <div>{theme === 2 && <RedDot className={dotColor} />}</div>
          <div>{theme === 3 && <RedDot className={dotColor} />}</div>
        </Switch>
      </Toggle>
    </Container>
  );
};

export default Theme;

const Container = tw.div`
    flex
    w-full
    mb-6
`;

const Calc = tw.p`
    flex
    ml-3
    text-2xl
    font-bold
    pb-1
    items-end
`;

const Label = tw.div`
    flex
    flex-1
    justify-end
    mr-6
    uppercase
    text-white
    items-end
`;

const Toggle = tw.div`
    flex
    flex-col
    w-[70px]
`;

const ThemeNumbers = tw.div`
    flex
    justify-around
    items-center
    text-white
    text-sm
    pb-1
    px-1
`;

const Switch = tw.div`
    flex
    h-[25px]
    w-full
    rounded-full
    bg-t_one_keypad
    items-center
    justify-between
    px-[6px]
`;

const RedDot = tw.div`
    rounded-full
    w-4
    h-4
    bg-t_one_theme_switch_bg
`;
