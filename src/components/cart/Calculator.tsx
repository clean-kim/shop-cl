import styled from "styled-components";
import {useEffect, useState} from "react";

export default function Calculator() {
    const [calcNum, setCalcNum] = useState(1);
    const calculator = (sign: number) => {
        console.log(sign);

        if(sign > 0) setCalcNum(prevState => prevState++);
        else if(sign < 1 && calcNum > 1) setCalcNum(prevState => prevState--);
    }

    useEffect(() => {}, [calcNum]);

    return (
        <CalculatorSpan>
            <CalculatorButton onClick={e => calculator(0)}>-</CalculatorButton>
            <CountInput id="targetNumber" defaultValue={calcNum} value={calcNum} />
            <CalculatorButton onClick={e => calculator(1)}>+</CalculatorButton>
        </CalculatorSpan>
    );
}

const CalculatorSpan = styled.span`
  width: 70px;
  position: relative;
  font-size: 12px;
  border: none;
  box-sizing: border-box;
  background: var(--ui-background);
`;

const CountInput = styled.input.attrs({
    type: "number",
    readOnly: true,
})`
  width: 40%;
  height: 22px;
  text-align: center;
  border: 1px solid var(--border100);
  border-radius: 5px;
  background: var(--ui-01);
`;

const CalculatorButton = styled.button.attrs({type: 'button'})`
  width: 30%;
  background: var(--ui-transparent);
  box-sizing: border-box;
  border: none;
  cursor: pointer;
`;