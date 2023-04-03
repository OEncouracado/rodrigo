import React from 'react'
import "./style.css"

function Transicao({ isLightMode }) {
  return (
  <div className='row m-0'>
    <div className={isLightMode ? 'col transicaoB d-flex justify-content-center align-items-center' : 'col transicao d-flex justify-content-center align-items-center'}>
      <h1 className={isLightMode? 'text-black':'text-white'}>A HARCO</h1>
    </div>
    <div className={isLightMode ? 'col pe-4 transicaoB d-flex justify-content-center align-items-center':'col pe-4 transicao d-flex justify-content-center align-items-center'}>
      <h2 className={isLightMode ? 'text-end text-black' : 'text-end text-white'}>A Harco Assessoria chega ao Rio de Janeiro com a proposta de centralizar algumas necessidades que o empreendedor tenha,<br/> para focar somente em seu negócio.</h2>
    </div>
  </div>
  )
}

export default Transicao
