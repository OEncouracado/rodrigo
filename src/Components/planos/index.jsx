import React from 'react'
import "./style.css"
import { Container } from 'react-bootstrap'

function DivPlanos() {
  return (
    <div className="fundoPlano d-flex justify-content-center">
        <Container className="row planos d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12 mb-5 d-flex justify-content-center"><h1>Conheça Nossos Planos</h1></div>
            </div>
        </Container>
      
    </div>
  )
}

export default DivPlanos
