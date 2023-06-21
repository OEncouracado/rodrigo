import React from 'react'
import "./style.css"

function FormEmail({isLightMode}) {
  return (
    <div className="no-gutters">
            <div className="contact-box-bg my-5">
            <div className="col-lg-12 contact-box m-0 smb-4">
                <div className={isLightMode ? "p-4 bg-dark bg-opacity-75":"p-4 bg-light bg-opacity-75"} style={{marginLeft:"1rem"}}>
                <h1 className={isLightMode ? "title font-weight-light text-white mt-2":"title font-weight-light mt-2"}>Fale Conosco</h1>
                <form className="mt-3" action="https://formsubmit.co/lojamavs@gmail.com" method="POST">
                    <input type="hidden" name="_template" value="table"/>
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group mt-2">
                        <input className="form-control" name='nome' type="text" placeholder="Nome" required/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group mt-2">
                        <input className="form-control" name='email' type="email" placeholder="E-mail" required/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group mt-2">
                        <textarea className="form-control" name='mensagem' rows="7" placeholder="Mensagem" required></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex align-items-center mt-2">
                        <button type="submit" className={isLightMode ? "btn btn-outline-light px-3 py-2":"btn btn-outline-dark px-3 py-2"}><span> Enviar</span></button>
                    
                    </div>
                    </div>
                </form>
                </div>
            </div>
    </div>
    </div>
  )
}

export default FormEmail
