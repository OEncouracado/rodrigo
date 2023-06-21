import React from 'react'
import "./style.css"
import { Container } from 'react-bootstrap'
import ProtectionCard from '../protectionCard';

function DivClientes({isLightMode}) {

  const protectionOptions = [
    { title: 'Hospital EMCOR de Nova Iguaçu',zap:'https://wa.me/5521974087703'},
  ];

  return (
    <div 
    className={isLightMode ? "flex-column fundoPlanoB d-flex justify-content-center":"flex-column fundoPlano d-flex justify-content-center"
    }>
        <Container className={isLightMode ?'planosB': 'planos'}>
          <Container className="row d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12 mb-5 d-flex justify-content-center"><h1 className={isLightMode ? 'text-center text-white':'text-center'}>Nossos Clientes</h1></div>
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

export default DivClientes
