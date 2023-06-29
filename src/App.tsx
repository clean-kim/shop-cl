import React, {useEffect} from 'react';
import './App.css';
import GlobalStyle from "./assets/GlobalStyle";
import Header from "./components/common/Header";
import Router from "./gnb/Router";
import styled from 'styled-components';

function App() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    return (
    <>
        <GlobalStyle />
        <Header />
        <Main>
            <Router />
        </Main>
    </>
  );
}

export default App;

const Main = styled.div`
  @media only screen and (min-width: 768px) {
      width: 1280px;
      margin: 0 auto;
  }
`;