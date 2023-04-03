import React from 'react'
import "./style.css"

function Transicao2({ isLightMode }) {
  return (<>
    <div className='row m-0'>
      <div className={isLightMode ? 'col-12 transicao2B d-flex justify-content-center' : 'col-12 transicao2 d-flex justify-content-center'}>
        <h1 className={isLightMode? 'text-black':'text-white'}>NOSSOS CLIENTES</h1>
      </div>
    </div>
    <div className='row m-0'>
      <div className={isLightMode ? 'col-12 transicao2B d-flex justify-content-center':'col transicao2 d-flex justify-content-center'}>
        <h2 className={isLightMode ? 'text-center text-black' : 'text-center text-white'}>A Harco Assessoria chega ao Rio de Janeiro com a proposta de centralizar algumas necessidades que o empreendedor tenha,<br/> para focar somente em seu negócio.</h2>
      </div>
    </div></>
  )
}

export default Transicao2
