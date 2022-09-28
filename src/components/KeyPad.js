import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { add, subtract, multiply, divide, reset } from "../redux/calculator";
import { displayInput, showCalculation } from "../redux/display";
import { useDispatch, useSelector } from "react-redux";

const KeyPad = () => {
  const [operator, setOperator] = useState("+");
  const [operand, setOperand] = useState("");
  const [isnewNumber, setIsNewNumber] = useState(true);

  const dispatch = useDispatch();
  const operandOne = useSelector((state) => state.calculator.value);
  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    dispatch(displayInput(operand));
  }, [operand]);

  const performCalculation = () => {
    if (operator === "+") {
      dispatch(add(parseFloat(operand)));
    }
    if (operator === "-") {
      dispatch(subtract(operand));
    }
    if (operator === "/") {
      dispatch(divide(operand));
    }
    if (operator === "X") {
      dispatch(multiply(operand));
    }
  };

  const addNumber = (e) => {
    dispatch(showCalculation(false));
    if (isnewNumber) {
      setOperand("");
    }
    setOperand((prev) => prev.concat(e.target.innerText));
    setIsNewNumber(false);
  };

  const addOperator = (e) => {
    dispatch(showCalculation(true));
    setOperand(operandOne);
    performCalculation();
    setIsNewNumber(true);
    if (e.target.innerText === "=") return;
    setOperator(e.target.innerText);
  };

  const deleteInput = () => {
    dispatch(showCalculation(false));
    let operandArr = operand.split("");
    operandArr.pop();
    operandArr = operandArr.join("");
    setOperand(operandArr);
  };

  const resetValues = () => {
    dispatch(showCalculation(true));
    setOperand("");
    setOperator("+");
    dispatch(reset());
  };

  const deleteBtnColor =
    theme === 1
      ? "bg-t_one_key_delete_bg hover:bg-t_one_key_delete_bg_hover"
      : theme === 2
      ? "bg-t_two_key_delete_bg hover:bg-t_two_key_delete_bg_hover"
      : "bg-t_three_key_delete_bg hover:bg-t_three_key_delete_bg_hover";
  const deleteBtnShadow =
    theme === 1
      ? "bg-t_one_key_delete_shadow"
      : theme === 2
      ? "bg-t_two_key_delete_shadow"
      : "bg-t_three_key_delete_shadow";
  const resolveBtnColor =
    theme === 1
      ? "bg-t_one_resolve_bg hover:bg-t_one_resolve_bg_hover"
      : theme === 2
      ? "bg-t_two_resolve_bg hover:bg-t_two_resolve_bg_hover"
      : "bg-t_three_resolve_bg hover:bg-t_three_key_resolve_bg_hover";
  const resolveBtnShadow =
    theme === 1
      ? "bg-t_one_resolve_shadow"
      : theme === 2
      ? "bg-t_two_resolve_shadow"
      : "bg-t_three_resolve_shadow";
  const btnTextColor =
    theme === 1
      ? "text-t_one_text bg-t_one_key_primary_bg hover:bg-white"
      : theme === 2
      ? "text-t_two_text bg-t_two_key_primary_bg hover:bg-white"
      : "text-t_three_text bg-t_three_key_primary_bg hover:bg-t_three_key_primary_bg_hover";

  return (
    <Container
      className={
        theme === 1
          ? "bg-t_one_keypad"
          : theme === 2
          ? "bg-t_two_keypad"
          : "bg-t_three_keypad"
      }
    >
      <Button>
        <ButtonTop onClick={(e) => addNumber(e)} className={btnTextColor}>
          7
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addNumber(e)} className={btnTextColor}>
          8
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addNumber(e)} className={btnTextColor}>
          9
        </ButtonTop>
      </Button>
      <Button className={deleteBtnShadow}>
        <ButtonTop
          className={`text-white text-lg ${deleteBtnColor}`}
          onClick={() => deleteInput()}
        >
          del
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop
          className={`t_one_key_blue_bg ${btnTextColor}`}
          onClick={(e) => addNumber(e)}
        >
          4
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addNumber(e)} className={btnTextColor}>
          5
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addNumber(e)} className={btnTextColor}>
          6
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addOperator(e)} className={btnTextColor}>
          +
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addNumber(e)} className={btnTextColor}>
          1
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addNumber(e)} className={btnTextColor}>
          2
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addNumber(e)} className={btnTextColor}>
          3
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addOperator(e)} className={btnTextColor}>
          -
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addNumber(e)} className={btnTextColor}>
          .
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addNumber(e)} className={btnTextColor}>
          0
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addOperator(e)} className={btnTextColor}>
          /
        </ButtonTop>
      </Button>
      <Button>
        <ButtonTop onClick={(e) => addOperator(e)} className={btnTextColor}>
          x
        </ButtonTop>
      </Button>
      <Button className={`${deleteBtnShadow} col-span-2 aspect-auto pb-1`}>
        <ButtonTop
          className={`text-white text-lg ${deleteBtnColor}`}
          onClick={() => resetValues()}
        >
          reset
        </ButtonTop>
      </Button>
      <Button className={`col-span-2 aspect-auto pb-1 ${resolveBtnShadow}`}>
        <ButtonTop
          className={`text-white text-lg mb-1 ${resolveBtnColor}`}
          onClick={(e) => addOperator(e)}
        >
          =
        </ButtonTop>
      </Button>
    </Container>
  );
};

export default KeyPad;

const Container = tw.div`
w-full
h-[calc(w-full*1.25)]
rounded-lg
p-6
grid
grid-cols-4
grid-rows-5
gap-3
lg:gap-6
`;

const Button = tw.div`
w-full
h-full
rounded-lg
bg-t_one_key_primary_shadow
aspect-square
lg:aspect-auto
lg:pb-1
`;

const ButtonTop = tw.div`
w-full
h-full
bg-t_one_key_primary_bg
mb-1
lg:py-3
rounded-lg
flex
justify-center
items-center
text-t_one_text
text-3xl
font-bold
uppercase
`;
