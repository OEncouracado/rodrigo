import React from 'react'
import "./style.css"
import { Card} from 'react-bootstrap'
import Criacao from "../../Images/criacao-site.png"

function Cartao() {
  return (
    <Card style={{ width: '7rem' }}  >
      <Card.Img variant="top" src={Criacao} />
      <Card.Body>
        <Card.Title>Criação de sites</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cartao
