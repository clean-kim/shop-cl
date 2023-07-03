import React, {useEffect, useRef} from 'react';
import './App.css';
import GlobalStyle from "./assets/GlobalStyle";
import Header from "./components/common/Header";
import Router from "./gnb/Router";
import styled from 'styled-components';
import {Alert} from '@mui/material';

function App() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const notiRef = useRef<HTMLDivElement>(null);
    const showNoti = () => {
        setTimeout(() => {
            if(notiRef.current) {
                notiRef.current.style.transform = 'translateY(68px)';
                notiRef.current.style.transition = 'all 0.6s ease-in-out';
            }
        }, 500);

        setTimeout(() => {
            if(notiRef.current) {
                notiRef.current.style.transform = 'translateY(-68px)';
                notiRef.current.style.transition = 'all 0.8s ease-in-out';
            }
        }, 3000);
    }
    useEffect(() => {
        showNoti();
    }, []);

    return (
    <Root>
        <GlobalStyle />
        <AlertBlock >
            <InfoAlert variant="filled" severity="info"ref={notiRef}>데이터가 안보이면 새로고침 해주세요!</InfoAlert>
        </AlertBlock>
        <Header />
        <Main>
            <Router />
        </Main>
    </Root>
  );
}

export default App;

const Root = styled.div`
  position: relative;
`;

const Main = styled.div`
  position: relative;
  
  @media only screen and (min-width: 768px) {
      width: 1280px;
      margin: 0 auto;
  }
`;

const AlertBlock = styled.div`
  position: absolute;
  opacity: 1;
  z-index: 999;
  width: 100%;
  height: 48px;
  top: -48px;
  text-align: center;
`;

const InfoAlert = styled(Alert)`
  width: 21.875rem; 
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: fit-content; 
  }
`;