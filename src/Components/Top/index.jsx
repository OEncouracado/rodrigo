import React from 'react'
import "./style.css"
import { Container } from 'react-bootstrap';
// import logo from "../../Images/Logos/logoleaoinvertido.png";




function Topo({ isLightMode }) {
  

  return (
    <div id='home' className={isLightMode ? 'fundoB' : 'fundo'}>
      <div className=" topoFundo">
        {/* <div className="direita py-2 mb-5 d-flex align-items-center justify-content-center">
            <img className="logo" src={logo} alt="" srcset="" />
        </div> */}
        <Container className="esquerda d-flex align-items-center justify-content-center">
            <h1 className={isLightMode ? 'textoTopB mb-5 d-flex font-weight-bold text-center align-items-center justify-content-center' : 'textoTop mb-5 d-flex font-weight-bold text-center align-items-center justify-content-center'}>Ei! vamos criar a imagem da sua empresa <br/> na internet?</h1>
        </Container>
        <Container className={isLightMode ? 'mb-2 sociaisB d-flex align-items-center justify-content-center' : 'mb-2 sociais d-flex align-items-center justify-content-center'}>
          <h4>Entre em contato nas nossas redes sociais!</h4>
        </Container>
        <Container className={isLightMode ? 'pb-3 sociaisB d-flex align-items-center justify-content-center' : 'pb-3 sociais d-flex align-items-center justify-content-center'}>
          <a href='https://www.instagram.com/mavsleowebdesign/' target="_blank" rel="noopener noreferrer"> <i class="fa fa-instagram mx-3 fs-2" aria-hidden="true" /></a>
            <a href='https://Wa.me/5521974087703' target="_blank" rel="noopener noreferrer"> <i class="fa fa-whatsapp mx-3 fs-2" aria-hidden="true"/></a>

        </Container>
      </div>
    </div>
  )
}

export default Topo
