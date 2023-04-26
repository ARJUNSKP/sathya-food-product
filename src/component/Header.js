import React from 'react';
import { Button,Container,Form,Nav,NavLink,Navbar} from 'react-bootstrap';
import './Header.css';
import {Route, Routes} from 'react-router-dom';
import Home from '../page/Home';

function Header() {
  return (
    <Navbar id="navbar">
        <Container fluid>
            <Navbar.Brand href='#'>Sathya Foods</Navbar.Brand>
            <Routes>
              <Nav className='justify-content-end navbar'id="nav" gap="6rem">
                <NavLink href="#product">Home</NavLink>
                <NavLink href="#product">Product</NavLink>
                <NavLink href="#condact">Contact</NavLink>
              </Nav>
            </Routes>
            <Form className="d-flex search-bar">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-1 size"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>

            </Form>
            <Nav className='justify-content-end'>
                <Button variant="outline-success" size="sm" id="div1">Login</Button>
                <Button variant="outline-secondary" size="sm" id="div2">Logout</Button>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header