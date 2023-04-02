import React from 'react'
import "./App.css"
import Topo from './Components/Top'
// import { Container } from 'react-bootstrap';
import Transicao from './Components/transicao';
import Divisorias from './Components/div';
import DivPlanos from './Components/planos';

function App() {
  return (
    <>
    <Topo/>
    <Transicao/>
    <Divisorias/>
    <DivPlanos/>
    </>
  )
}

export default App