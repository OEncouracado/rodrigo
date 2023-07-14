import React from 'react'
import "./style.css"
import FormEmail from '../formEmail'
import logo from "../../Images/Logos/logoleaoinvertido.png"
import logoB from "../../Images/Logos/logoleaoinvertido.png"

function Foot({isLightMode}) {
  return (
  <>
    <h1 className={isLightMode ? "m-0 p-3 bg-white text-dark text-center":"m-0 p-3 bg-dark text-white text-center"}>FALE CONOSCO</h1>
    <div className={isLightMode ? "footB mx-0 row":"foot mx-0 row"}>
    
    <div className="col-lg-4">
        <FormEmail isLightMode={isLightMode}/>
      </div> 
      <div className="foot__mid col-lg-4 pt-4">
        <div className='d-flex flex-column foot__mid__direct'>
          <a href="tel:+5521974087703"><h2 className={isLightMode ? "text-justify":"text-justify text-white"}><i class="fa fa-phone  text-start" aria-hidden="true"></i> (21) 9 7408-7703</h2></a>
          <a href="mailto:lojasmav@gmail.com"><h5 className={isLightMode ? "text-justify":"text-justify text-white"}><i class="fa fa-envelope h2 text-start" aria-hidden="true"></i>  lojasmav@gmail.com</h5></a>
          <a href="https://www.instagram.com/lojasmavs/" target="_blank" rel="noopener noreferrer"><h2 className={isLightMode ? "text-justify":"text-justify text-white"}><i class="fa fa-instagram text-start h1" aria-hidden="true"></i> @lojasmavs </h2></a>
        </div>
        <img className="logoF" src={isLightMode ? logo : logoB } alt="" srcset="" />
        <div className='d-flex flex-column foot__mid__obg'>
          <h2 className={isLightMode ? "text-justify":"text-justify text-white"}>OBRIGADO!</h2>
        </div>
      </div>  
      <div className=" col-lg-4 pt-4 d-flex justify-content-end align-items-end">
        <div>
          
        </div>
        <a className={isLightMode ? "devpor":"devpor text-white"} href="https://mavsleo.com.br" target="_blank" rel="noopener noreferrer">Desevolvido por MAV's LEO</a> 
      </div>

    
      
    </div>
  </>
  )
}

export default Foot
