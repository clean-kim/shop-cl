import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import {CSSProperties} from "react";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    background-color: #ffffff;
    color: #171718;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: -apple-system;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  :root {
    --primary: #171718;
    --secondary: #1f2124;
    --tertiary: #ff6700;
    --ui-background: #ffffff;
    --ui-01: #fafafa;
    --ui-02: #f5f5f5;
    --ui-03: #eeeeee;
    --ui-transparent: transparent; 
    --border50: #fafafa;
    --border100: #f5f5f5;
    --border200: #eeeeee;
    --border300: #e0e0e0;
    --border400: #bdbdbd;
    --text-01: #000000;
    --text-02: #333333;
    --text-03: #626262;
    --text-04: #858585;
    --text-05: #bbbbbb;
    --text-06: #ffffff;

    --vh: 100%;
  }

  .nav-swiper {
    .nav-slide-active {
      border-bottom: 2px solid var(--primary);
    }
  }

  .main-swiper {
    position: relative;
    
    .swiper-button-next, .swiper-button-prev {
      color: var(--primary);
    }
    
    .swiper-pagination-progressbar {
      background: transparent;
      top: revert;
      bottom: 0;
    }

    .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
      background: var(--primary);
    }
  }
`;

export default GlobalStyle;

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#171718'
    }
  }
});

interface MarginProps {
  margin: string;
  mt: number;
  mr: number;
  mb: number;
  ml: number;
}

export const Margin = styled.div<Partial<MarginProps>>`
  margin: ${({ margin }) => margin};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-left: ${({ ml }) => `${ml}px`};
`;

export const ListLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (min-width: 768px) {
    gap: 30px 1.33%;
  }
`;

export const ListSection = styled.section`
  margin: 50px auto 0;
  width: 90%;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

export const Flex = styled(Margin)<CSSProperties>`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection ?? 'row'};
  justify-content: ${({justifyContent}) => justifyContent ?? `center`};
  align-items: ${({alignItems}) => alignItems ?? `center`};
`;


export const SearchButton = styled.button.attrs({
  type: "button"
})`
  width: 3.125rem;
  position: relative;
  cursor: pointer;
  
  @media only screen and (max-width: 768px) {
    margin: 0;
    width: fit-content;
  }
`;

export const HiddenText = styled.span`
  position: absolute;
  display: inline-block;
  width: 1px; 
  height: 1px;
  top: 0;
  left: 0;
  font-size: 1px;
  line-height: 100px;
  overflow: hidden;
`;