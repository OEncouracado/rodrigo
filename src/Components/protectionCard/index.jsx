import React from 'react'
import "./style.css"
import { Button } from 'react-bootstrap'

function ProtectionCard({ title, price, descrip, isLightMode }) {
  return (
    <div className="protection-card">
      <h3 className="protection-card__title py-2">{title}</h3>
      <p className="protection-card__price">{price}</p>
      <p className="protection-card__description">{descrip}</p>
      <button className="d-flex justify-content-center mx-auto my-3 protection-card__button btn btn-primary">Quero Contratar</button>
    </div>
  )
}

export default ProtectionCard
