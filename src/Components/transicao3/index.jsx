import React from 'react'
import "./style.css"

function Transicao3({ isLightMode }) {
  return (<>
    <div className='row m-0'>
      <div className={isLightMode ? 'col-12 transicao3B d-flex justify-content-center' : 'col-12 transicao3 d-flex justify-content-center'}>
        <h1 className={isLightMode? 'text-black mt-3':'text-white mt-3'}>Poderosos Resultados</h1>
      </div>
    </div>
    <div className='row m-0'>
      <div className={isLightMode ? 'col-12 transicao3B d-flex justify-content-center':'col transicao3 d-flex justify-content-center'}>
        <h2 className={isLightMode ? 'text-center text-black mb-4' : 'text-center text-white mb-4'}>Transformamos ideias em sites incríveis para encantar <br/> nossos clientes e impulsionar seus negócios.</h2>
      </div>
    </div></>
  )
}

export default Transicao3
