import styled from 'styled-components';

export default function CheckboxRound() {
    return (
        <Checkbox>
            <input type="checkbox" id="icb"/>
            <label htmlFor="icb" />
        </Checkbox>
    );
}

const Checkbox = styled.div`
  width: 22px;
  height: 22px;
  position: relative;
  
  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  input[type='checkbox']+label {
    display: inline-block;
    position: absolute;
    width: 22px;
    height: 22px;
  }

  input[type='checkbox']+label::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    top: 0;
    left: 0;
    display: block;
    background-color: var(--ui-background);
    border: 2px solid var(--border300);
    border-radius: 50%;
    transition: color .1s, border-color .1s,background-color .1s;
    box-sizing: border-box;
  }

  input[type='checkbox']:checked+label::before{
    position: absolute;
    content: '';
    background: url(${`/img/checked.svg`}) center no-repeat;
    background-size: 18px;
    background-color: var(--primary);
    border: 2px solid var(--primary);
    transition: color .1s, border-color .1s,background-color .1s;
    border-radius: 50%;
  }
`;
