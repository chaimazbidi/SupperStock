import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './InfoProd.css';
import {RiAccountPinCircleFill} from "react-icons/ri"
import './NavAcueil.css';
function NavAcueil() {
  return (
    <>
    <Navbar  variant={"dark"} style={{backgroundColor:"#131114"}}>
          <Container >
            <Navbar.Brand href="#" className="title1">SuperStock<strong>.net</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/" className="menu1">Accueil</Nav.Link>
                <Nav.Link href="/Produits" className="menu1">Produits</Nav.Link>
                <NavDropdown title="Ctégories" id="navbarScrollingDropdown" className="menu1">
                  <NavDropdown.Item href="#action3" >Produits entrant</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Produits sortant</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">voir plus ..</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="#" className="menu1">Contact </Nav.Link>
              </Nav>
                <Nav.Link href="/Login" className="icon2" >
                  <RiAccountPinCircleFill size={33}/>
                </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
  )
}

export default NavAcueil
