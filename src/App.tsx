import React from 'react';
import './App.css';
import GlobalStyle from "./assets/GlobalStyle";
import Header from "./components/common/Header";
import Router from "./gnb/Router";
import styled from 'styled-components';

function App() {
  return (
    <>
        <GlobalStyle />
        <Header />
        <main>
            <Router />
        </main>
    </>
  );
}

export default App;