import styled, {css} from 'styled-components';
import {CSSProperties, MouseEventHandler, ReactNode} from "react";

export interface ButtonProps {
    type?: "button" | "submit" | "reset";
    onClickHandler?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
    disabled?: boolean;
    setStyle?: CSSProperties;
    setValue?: any;
}

export default function Button({type, onClickHandler, children, disabled, setStyle, setValue}: ButtonProps) {
    return <ButtonLayout
                type={type ?? 'button'}
                onClick={onClickHandler}
                disabled={disabled}
                style={setStyle}
                value={setValue}
            >
                {children}
            </ButtonLayout>;
}

const ButtonLayout = styled.button<ButtonProps>`
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({setStyle}) => setStyle?.width ?? '100%'};
  min-width: 40px;
  height: ${({setStyle}) => setStyle?.height ?? '58px'};
  min-height: 25px;
  border: 1px solid var(--primary);
  color: var(--primary);
  background-color: var(--ui-background);
  cursor: pointer;
  
  ${({disabled}) => disabled && css`
    background: var(--ui-10) !important;
    color: var(--text-04) !important;
    cursor: not-allowed;
  `}
`;

export const ButtonStyleGuide = {
    primary: {
        border: `1px solid var(--primary)`,
        color: `var(--primary)`,
        background: `var(--ui-background)`
    },
    basic01: {
        color: `var(--text-06)`,
        background: `var(--primary)`
    },
    basic02: {
        color: `var(--text-06)`,
        background: `var(--primary-dark)`
    },
    borderBasic01: {
        border: `1px solid var(--ui-04)`,
        color: `var(--text-02)`,
        background: `var(--ui-background)`
    },
    borderBasic02: {
        border: `1px solid var(--ui-05)`,
        color: `var(--text-02)`,
        background: `var(--ui-background)`,
        hover: {
            background: `var(--ui-01)`,
        }
    }
}