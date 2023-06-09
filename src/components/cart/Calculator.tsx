import styled from "styled-components";
import {useEffect, useState, MouseEvent} from "react";

interface CalculatorProps {
    initialCount: number;
}

export default function Calculator({initialCount}: CalculatorProps) {
    const [calcNum, setCalcNum] = useState(1);
    const calculator = (e: MouseEvent<HTMLButtonElement>, sign: number) => {
        console.log(sign);
        if(sign > 0) setCalcNum(prevState => prevState++);
        else if(sign < 1 && calcNum > 1) setCalcNum(prevState => prevState--);
    }

    useEffect(() => {
        setCalcNum(initialCount);
    }, [initialCount]);

    return (
        <CalculatorSpan>
            <CalculatorButton onClick={e => calculator(e, 0)}>-</CalculatorButton>
            <CountInput id="targetNumber" value={calcNum} />
            <CalculatorButton onClick={e => calculator(e, 1)}>+</CalculatorButton>
        </CalculatorSpan>
    );
}

const CalculatorSpan = styled.div`
  width: 70px;
  position: relative;
  font-size: 12px;
  border: none;
  box-sizing: border-box;
  background: var(--ui-background);
  display: flex;
`;

const CountInput = styled.input.attrs({
    type: "number",
    readOnly: true,
})`
  width: 40px;
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