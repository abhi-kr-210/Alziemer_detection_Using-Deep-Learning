import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../src/HeaderStyles.css"
import img1 from "../assets/img_doc1.png"
import img2 from "../assets/img_doc2.png"
function Header() {
  return (
    <header className='header_section' >
   <Navbar collapseOnSelect expand="lg" style={{padding:"0px"}}>
      <Container className='d-flex'>
      <Navbar.Brand href="#home" style={{padding:"6px"}} >
        <img src={img1} alt="logo" className='img-fluid logo_img brand_logo1' />
        {/* <img src={img2} alt="logo" className='img-fluid logo_img brand_logo2' />*/}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto justify-content-center align-items-center" >
            <Nav.Link as={Link} to="/" >HOME</Nav.Link>
            <Nav.Link as={Link} to="/about" >ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
            <Nav.Link as={Link} to="/ourmenu">LOGIN</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>
  </header>
  )
}

export default Header