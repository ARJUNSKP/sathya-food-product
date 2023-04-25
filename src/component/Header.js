import React from 'react';
import { Button,Container,Form,Nav,NavLink,Navbar} from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar>
        <Container>
            <Navbar.Brand href='#'>Sathya Foods</Navbar.Brand>
            <Nav className='justify-content-end'id="nav" gap="6rem">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#product">Product</NavLink>
                <NavLink href="#condact">Contact</NavLink>
            </Nav>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className='justify-content-end'id="nav">
                <Button variant="secondary" size="lg" active>Login </Button>
                <Button variant="secondary" size="lg" active> Logout </Button>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header