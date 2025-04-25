import React from 'react'
import "./style.css"
import { Container } from 'react-bootstrap'
import ProtectionCard from '../protectionCard';
import img from "../../Images/avif/hospitalemcor.com.br_novo_.png"

function DivClientes({isLightMode}) {

  const protectionOptions = [
    {
      title: "Hospital EMCOR de Nova Iguaçu",
      zap: "https://wa.me/5521974087703",
      site: "https://hospitalemcor.com.br/novo",
      descrip: "Quer ser nosso novo cliente?",
    },
  ];

  return (
    <div 
      className={isLightMode ? "flex-column fundoPlanoB d-flex justify-content-center" : "flex-column fundoPlano d-flex justify-content-center"
      } id='clientes'
    >
      <Container className={isLightMode ? 'pt-5 planosB' : 'pt-5 planos'} >
          <Container className="row d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12 mb-5 d-flex justify-content-center"><h1 className={isLightMode ? 'text-center text-white':'text-center'}>Nossos Clientes</h1></div>
            </div>
          </Container>
          <Container className="row d-flex justify-content-center">
                <div className="col-3-sm protection-cards">
                    {protectionOptions.map(({ title, price, site, descrip, zap , }) => (
                      <ProtectionCard key={title} site={site} title={title} price={price} descrip={descrip} zap={zap} img={img}/>
                    ))}
                </div>
          </Container>
        </Container>
      
    </div>
  )
}

export default DivClientes
