import React from 'react'
import "./style.css"
import { Container } from 'react-bootstrap'
import ProtectionCard from "../protectionCard";
import clavis from "../../Images/claviscord.png";
import linkii from "../../Images/linkii.png";

function DivisoriasP({ isLightMode }) {
  const protectionOptions = [
    {
      title: "ClavisCord",
      zap: "https://wa.me/5521974087703",
      site: "https://claviscords-git-nova-criacao-oencouracados-projects.vercel.app/",
      img: clavis,
      descrip: "Web Aplicativo de controle de chaves",
    },
    {
      title: "Linkii.me",
      zap: "https://wa.me/5521974087703",
      site: "https://linkii.me/",
      img: linkii,
      descrip: "Web Aplicativo de criação de links personalizados",
    },
  ];
  return (
    <div
      className={
        isLightMode
          ? "flex-column fundoPlanoB d-flex justify-content-center"
          : "flex-column fundoPlano d-flex justify-content-center"
      }
      id="produtos"
    >
      <Container className={isLightMode ? "pt-5 planosB" : "pt-5 planos"}>
        <Container className="row d-flex justify-content-center">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12 mb-5 d-flex justify-content-center">
              <h1
                className={
                  isLightMode ? "text-center text-white" : "text-center"
                }
              >
                Nossos Produtos
              </h1>
            </div>
          </div>
        </Container>
        <Container className="row d-flex justify-content-center">
          <div className="col-3-sm protection-cards">
            {protectionOptions.map(
              ({ title, price, site, descrip, zap, img }) => (
                <ProtectionCard
                  key={title}
                  site={site}
                  title={title}
                  price={price}
                  descrip={descrip}
                  zap={zap}
                  img={img}
                />
              )
            )}
          </div>
        </Container>
      </Container>
    </div>
  );
}
export default DivisoriasP
