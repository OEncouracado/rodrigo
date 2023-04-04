import React from 'react'
import "./style.css"

function Transicao2({ isLightMode }) {
  return (<>
    <div className='row m-0'>
      <div className={isLightMode ? 'col-12 transicao2B d-flex justify-content-center' : 'col-12 transicao2 d-flex justify-content-center'}>
        <h1 className={isLightMode? 'text-black mt-3':'text-white mt-3'}>CURTIU? <i class= {isLightMode? 'fa fa-thumbs-up ':'fa fa-thumbs-up'} aria-hidden="true"/></h1>
      </div>
    </div>
    <div className='row m-0'>
      <div className={isLightMode ? 'col-12 transicao2B d-flex justify-content-center':'col transicao2 d-flex justify-content-center'}>
        <h2 className={isLightMode ? 'text-center text-black mb-4' : 'text-center text-white mb-4'}>Quer começar a vender ainda mais o seu produto <br/> ou serviço através do mundo digital?</h2>
      </div>
    </div></>
  )
}

export default Transicao2
