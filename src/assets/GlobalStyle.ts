import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #ffffff;
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
    font-family: 'Maven Pro', sans-serif;
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
  }

  .nav-swiper {
    .nav-slide-active {
      border-bottom: 2px solid var(--primary);
    }
  }

  .main-swiper {
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

    .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
      
    }
  }
`;

export default GlobalStyle;

export type MarginProps = {
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
`;

