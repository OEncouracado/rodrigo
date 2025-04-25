import React from 'react'
import "./style.css"
import { Button } from "react-bootstrap";

function ProtectionCard({
  title,
  price,
  site,
  zap,
  msg,
  isLightMode,
  img,
  descrip,
}) {
  return (
    <div className="protection-card">
      <h3 className="protection-card__title py-2">{title}</h3>
      <a href={site}>
        <img className="sites" src={img} alt="emcor" srcset="" />
      </a>
      <p className="protection-card__description">{descrip}</p>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        href={zap}
        className="d-flex justify-content-center mx-4 my-3 protection-card__button btn btn-primary"
      >
        Clique Aqui
      </Button>
    </div>
  );
}

export default ProtectionCard
