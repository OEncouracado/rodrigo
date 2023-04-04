import React from 'react'
import "./style.css"
import { Button } from 'react-bootstrap'

function ProtectionCard({ title, price, descrip, zap, msg , isLightMode }) {
  return (
    <div className="protection-card">
      <h3 className="protection-card__title py-2">{title}</h3>
      <p className="protection-card__description">{descrip}</p>
      <p className="protection-card__price">{price}</p>
      <Button target="_blank" rel="noopener noreferrer" href={zap} className="d-flex justify-content-center mx-4 my-3 protection-card__button btn btn-primary">Quero Contratar</Button>
    </div>
  )
}

export default ProtectionCard
