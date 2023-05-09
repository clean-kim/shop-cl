import React from 'react';
import './App.css';
import GlobalStyle from "./assets/GlobalStyle";
import Header from "./components/common/Header";
import Router from "./gnb/Router";

function App() {
  return (
    <>
        <GlobalStyle />
        <Header />
        <Router />
    </>
  );
}

export default App;
