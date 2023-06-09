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
    const warnNotiRef = useRef<HTMLDivElement>(null);
    const showNoti = () => {
        setTimeout(() => {
            if(notiRef.current) {
                notiRef.current.style.transform = 'translateY(68px)';
                notiRef.current.style.transition = 'all 0.6s ease-in-out';
            }
        }, 500);

        setTimeout(() => {
            if(warnNotiRef.current) {
                warnNotiRef.current.style.visibility = 'visible';
                warnNotiRef.current.style.transform = 'translateY(68px)';
                warnNotiRef.current.style.transition = 'all 0.6s ease-in-out';
            }
        }, 1500);

        setTimeout(() => {
            if(warnNotiRef.current) {
                warnNotiRef.current.style.transform = 'translateY(0)';
                warnNotiRef.current.style.transition = 'all 0.6s ease-in-out';
            }
        }, 2500);

        setTimeout(() => {
            if(notiRef.current && warnNotiRef.current) {
                notiRef.current.style.transform = 'translateY(-68px)';
                notiRef.current.style.transition = 'all 0.6s ease-in-out';
                warnNotiRef.current.style.display = 'none';
            }
        }, 3100);
    }
    useEffect(() => {
        showNoti();
    }, []);

    return (
    <Root>
        <GlobalStyle />
        <AlertBlock>
            <InfoAlert variant="filled" ref={notiRef} severity="info">데이터가 안보이면 새로고침 해주세요!</InfoAlert>
            <WarnAlertBlock>
                <WarningAlert variant="filled" ref={warnNotiRef} severity="warning">아직 개발중이에요:)</WarningAlert>
            </WarnAlertBlock>
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
  z-index: 99;
  width: fit-content;
  height: 48px;
  top: -48px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  
  @media only screen and (max-width: 768px) {
    width: 350px;
    max-width: 350px;
  }
`;

const InfoAlert = styled(Alert)`
  width: 21.875rem; 
  margin: 0 auto;
  text-align: center;

  @media only screen and (max-width: 768px) {
    width: fit-content; 
  }
`;

const WarnAlertBlock = styled.div`
  position: relative;
  width: fit-content;
  transform: translate(50%, 0);
  z-index: -1;
`;

const WarningAlert = styled(Alert)`
  width: fit-content;
  margin: 20px auto 0;
  text-align: center;
  visibility: hidden;
`;