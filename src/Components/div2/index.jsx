import React from 'react'
import "./style.css"
import { Container } from 'react-bootstrap'
import ProtectionCard from "../protectionCard";

function DivisoriasP({ isLightMode }) {
  const protectionOptions = [
    {
      title: "ClavisCord",
      zap: "https://wa.me/5521974087703",
      site: "https://claviscords-git-nova-criacao-oencouracados-projects.vercel.app/",
      img: "https://hospitalemcor.com.br/novo",
      descrip: "Web Aplicativo de controle de chaves",
    },
  ];
  return (
    <div
      className={
        isLightMode
          ? "pt-5 segunda-divB d-flex justify-content-center"
          : "pt-5  segunda-div d-flex justify-content-center"
      }
      id="produtos"
    >
      <Container
        style={{ height: "15rem" }}
        className={
          isLightMode
            ? "row servicosB  d-flex justify-content-center"
            : "row servicos  d-flex justify-content-center"
        }
      >
        <div className="col-lg-12 mb-5 flex-column align-items-center d-flex justify-content-center">
          <h1 className={isLightMode ? " tituloB mt-2" : " titulo mt-2"}>
            Nossos Produtos
          </h1>
          <h1 className={isLightMode ? " tituloB mt-4" : " titulo mt-4"}>
            EM BREVE MAIS NOVIDADES
          </h1>
          {protectionOptions.map(({ title, price, site, descrip, zap }) => (
            <ProtectionCard
              key={title}
              site={site}
              title={title}
              price={price}
              descrip={descrip}
              zap={zap}
              img={img}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default DivisoriasP
