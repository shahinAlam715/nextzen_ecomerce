import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import nextzen from "../assets/zenlogo.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="menu_bg">
      <Container>
        <Navbar.Brand href="#" className='logo'><img src={nextzen} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/"   className='list'>Home</Nav.Link>
            <Nav.Link href="/about"   className='list'>About Us</Nav.Link>
            <Nav.Link href="/courses"   className='list'>Courses</Nav.Link>
           
            <Nav.Link href="/conntactt"  className='list'>Contact Us</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Link to="/login">
            <Button variant="" className='btn'>Login</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header