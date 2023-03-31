import React from 'react'
import "./style.css"
import { Container } from 'react-bootstrap';
import logo from "../../Images/harcoSFundo.png"

function Topo() {
  return (
    <div className=" m-5 row topoFundo">
      <Container className="col esquerda d-flex align-items-center justify-content-left">
            <span className='texto d-flex font-weight-bold text-left align-items-center justify-content-center'>Ei! vamos <br/> criar a imagem <br/>da sua empresa <br/> na internet?</span>
      </Container>
      <Container className="col direita d-flex align-items-center justify-content-center">
            <img className="logo" src={logo} alt="" srcset="" />
      </Container>
    </div>
  )
}

export default Topo
