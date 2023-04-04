import React from 'react'
import "./style.css"
import { Container } from 'react-bootstrap'
import ProtectionCard from '../protectionCard';

function DivPlanos({isLightMode}) {

  const protectionOptions = [
    { title: 'Plano MASTER', price: 'R$497,90 mensais',descrip:'03 artes semanais (Feed e Story) Facebook, Instagram e WhatsApp' , zap:'https://wa.me/5521979171806?text=Ol%C3%A1%2C+gostaria+de+falar+sobre+o+Plano+Master' },
    { title: 'Plano STANDART', price: 'R$343,90 mensais',descrip:'03 artes semanais (Feed e Story) Facebook e Instagram' , zap:'https://wa.me/5521979171806?text=Ol%C3%A1%2C+gostaria+de+falar+sobre+o+Plano+STANDART' },
    { title: 'Plano SMART', price: 'R$227,90 mensais',descrip:'01 arte semanal (Feed e Story) Facebook e Instagram' , zap:'https://wa.me/5521979171806?text=Ol%C3%A1%2C+gostaria+de+falar+sobre+o+Plano+SMART' },
    { title: 'Plano MASTER + ', price: 'À Combinar',descrip:'Todos os benefícios do Plano Master e muito mais para alavancar suas Redes Sociais' , zap:'https://wa.me/5521979171806?text=Ol%C3%A1%2C+gostaria+de+falar+sobre+o+Plano+Master+%2B' },
  ];

  return (
    <div className={isLightMode ? "flex-column fundoPlanoB d-flex justify-content-center":"flex-column fundoPlano d-flex justify-content-center"}>
        <Container className={isLightMode ?'planosB': 'planos'}>
          <Container className="row d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12 mb-5 d-flex justify-content-center"><h1 className={isLightMode ? 'text-center text-white':'text-center'}>Conheça Nossos Planos</h1></div>
            </div>
          </Container>
          <Container className="row d-flex justify-content-center">
                <div className="col-3-sm protection-cards">
                    {protectionOptions.map(({ title, price, descrip, zap , }) => (
                      <ProtectionCard key={title} title={title} price={price} descrip={descrip} zap={zap}/>
                    ))}
                </div>
          </Container>
        </Container>
      
    </div>
  )
}

export default DivPlanos
