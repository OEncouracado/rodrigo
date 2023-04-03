import React, { useState } from 'react'
import "./App.css"
import Topo from './Components/Top'
// import { Container } from 'react-bootstrap';
import Transicao from './Components/transicao';
import Divisorias from './Components/div';
import DivPlanos from './Components/planos';
import SwitchLD from './Components/switch';
import Transicao2 from './Components/transicao2';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  
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
    </>
  )
}

export default App