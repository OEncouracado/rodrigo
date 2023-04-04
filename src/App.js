import React, { useEffect, useState } from 'react'
import "./App.css"
import Topo from './Components/Top'
// import { Container } from 'react-bootstrap';
import Transicao from './Components/transicao';
import Divisorias from './Components/div';
import DivPlanos from './Components/planos';
import SwitchLD from './Components/switch';
import Transicao2 from './Components/transicao2';
import Foot from './Components/foot';

function App() {
  const [isLightMode, setIsLightMode] = useState(getInitialMode());

  function getInitialMode() {
    const isReturningUser = 'darkMode' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return false;
    } else {
      return true;
    }
  }

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isLightMode));
  }, [isLightMode]);
  
  function toggleTheme() {
    setIsLightMode(!isLightMode);
  }
  return (
    <>
    
    <SwitchLD isLightMode={isLightMode} toggleTheme={toggleTheme}/>
    <Topo isLightMode={isLightMode}/>
    <Transicao isLightMode={isLightMode}/>
    <Divisorias isLightMode={isLightMode}/>
    <Transicao2 isLightMode={isLightMode}/>
    <DivPlanos isLightMode={isLightMode}/>
    <Foot isLightMode={isLightMode}/>
    </>
  )
}

export default App