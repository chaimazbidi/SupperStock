import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './InfoProd.css';
import {FiShoppingCart} from "react-icons/fi";
import {RiAccountPinCircleFill} from "react-icons/ri"

function NavProd() {
   
  
  return (
    <>
    <Navbar  style={{backgroundColor:"#000d1a"}}>
          <Container >
            <Navbar.Brand href="#" className="title">SuperStock<strong>.net</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/" className="menu">Accueil</Nav.Link>
                <Nav.Link href="/Produits" className="menu">Produits</Nav.Link>
                <NavDropdown title="Ctégorie" id="navbarScrollingDropdown" className="menu" style={{color:"white"}}>
                  <NavDropdown.Item href="#action3" >Produits entrant</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Produits sortant</NavDropdown.Item>
                
                </NavDropdown>
                
                <Nav.Link href="#" className="menu">Contact </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Recherche"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="btn">Recherche</Button>
              </Form>
              <Nav.Link href="/Produits/#panier" className="icon1">
                  <FiShoppingCart size={25}/>
                </Nav.Link>
                <Nav.Link href="/Login" className="icon">
                  <RiAccountPinCircleFill size={25}/>
                </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
  )
}

export default NavProd
