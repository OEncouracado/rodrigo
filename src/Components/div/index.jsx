import React from 'react'
import "./style.css"
import { Container } from 'react-bootstrap'
import Criacao from '../../Images/responsive-design.png'
import Socialm from '../../Images/avif/midia-social.webp'
import Lpage from '../../Images/landing-page.png'

function Divisorias({ isLightMode }) {
  return (
    <div className={isLightMode ? 'segunda-divB d-flex justify-content-center' : 'segunda-div d-flex justify-content-center'} id='servicos'>
      <Container className={isLightMode ? ' pt-5 row servicosB  d-flex justify-content-center' : 'pt-5 row servicos  d-flex justify-content-center'}>
        <div className="col-lg-12 mb-5 d-flex justify-content-center"> <h1 className={isLightMode ? ' tituloB mt-2':' titulo mt-2'}>Nossos Serviços</h1></div>
          <div className='row'>
            <div className="col-lg-4">
              <div className="imagemFundo py-3 d-flex justify-content-center">
                <div className="imagem d-flex justify-content-center">
                  <img src={Criacao} alt="" srcset="" />
                </div>
              </div>
              <div className="titulo">
                <h5 className={isLightMode ? "text-white text-center mb-3" : "text-black text-center mb-3"}>CRIAÇÃO DE SITES</h5>
              </div>
              <div className="criacaoTexto">
                <p className={isLightMode ? "text-white text-center":"text-center"}>Coloque sua empresa no mundo digital. Exiba seu portfólio, equipe, contatos, notícias e muito mais...</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="imagemFundo py-3 d-flex justify-content-center">
                <div className="imagem d-flex justify-content-center">
                  <img src={Socialm} alt="" srcset="" />
                </div>
              </div>
              <div className="titulo">
                <h5 className={isLightMode ? "text-white text-center mb-3" : "text-black text-center mb-3"}>Artes para Redes Sociais</h5>
              </div>
              <div className="criacaoTexto">
                <p className={isLightMode ? "text-white text-center":"text-center"}>Turbine suas redes com artes profissionais para Facebook, Instagram e WhatsApp</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="imagemFundo py-3 d-flex justify-content-center">
                <div className="imagem d-flex justify-content-center">
                  <img src={Lpage} alt="" srcset="" />
                </div>
              </div>
              <div className="titulo">
                <h5 className={isLightMode ? "text-white text-center mb-3" : "text-black text-center mb-3"}>Landing Page</h5>
              </div>
              <div className="criacaoTexto">
                <p className={isLightMode ? "text-white text-center":"text-center"}>Seu site perfeito para captação de novos clientes e demonstração dos seus serviços</p>
              </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Divisorias
