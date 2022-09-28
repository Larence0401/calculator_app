import React from "react";
import tw from "tailwind-styled-components";
import KeyPad from "./KeyPad";
import Theme from "./Theme";
import Display from "./Display";
import { useSelector } from "react-redux";

const Device = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <Container
      className={
        theme === 1
          ? "bg-t_one_device"
          : theme === 2
          ? "bg-t_two_device"
          : "bg-t_three_device"
      }
    >
      <Wrapper>
        <Theme />
        <Display />
        <KeyPad />
      </Wrapper>
    </Container>
  );
};

export default Device;

const Container = tw.div`
    flex
    flex-col
    w-full
    h-screen
    items-center
    p-6
    justify-center
`;

const Wrapper = tw.div`
    flex
    flex-col
    w-full
    lg:w-[540px]
    h-screen
    lg:h-auto
    items-center
`;
