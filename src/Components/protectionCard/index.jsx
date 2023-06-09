import React from 'react'
import "./style.css"
import { Button } from 'react-bootstrap'
import site from "../../Images/hospitalemcor.com.br.png"

function ProtectionCard({ title, price, descrip, zap, msg , isLightMode }) {
  return (
    <div className="protection-card">
      <h3 className="protection-card__title py-2">{title}</h3>
      <a href="https://hospitalemcor.com.br"><img className='sites' src={site} alt="emcor" srcset="" /></a>
      <p className='protection-card__description'>Quer ser nosso próximo cliente?</p>
      <Button target="_blank" rel="noopener noreferrer" href={zap} className="d-flex justify-content-center mx-4 my-3 protection-card__button btn btn-primary">Clique Aqui</Button>
    </div>
  )
}

export default ProtectionCard
