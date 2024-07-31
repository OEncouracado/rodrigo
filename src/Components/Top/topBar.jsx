import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import logo from "../../Images/logoleaoinvertido.png"

function TopBar({ isLightMode, toggleTheme }) {
    return (
        <Navbar fixed='top' className='topbar' expand="md" variant={isLightMode ? 'light' : "dark"}>
            <Container>
                <Navbar.Brand href='#'>
                    <Image style={{ width: "3rem" }} className='' fluid src={logo} rounded />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-control' />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href='#home'>
                            Home
                        </Nav.Link>
                        <Nav.Link href='#quem-somos'>
                            Quem Somos
                        </Nav.Link>
                        <Nav.Link href='#produtos'>
                            Nossos Produtos
                        </Nav.Link>
                        <Nav.Link href='#clientes'>
                            Nossos Clientes
                        </Nav.Link>
                        <Nav.Link href='#contato'>
                            Fale Cononsco
                        </Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <label className="switch">
                                <p className={isLightMode ? "switch__label" : "switch__label text-white"}>{isLightMode ? "Claro" : "Escuro"}</p>
                                <input type="checkbox" checked={isLightMode} onChange={toggleTheme} />
                                <span className="slider"></span>
                            </label>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    )
}

export default TopBar
