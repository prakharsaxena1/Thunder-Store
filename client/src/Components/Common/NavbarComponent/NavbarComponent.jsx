import React from 'react'
import styled from 'styled-components';
import {Container, Nav, Navbar, Form, Badge} from 'react-bootstrap';
import {AiOutlineShoppingCart} from 'react-icons/ai/';
import {Link} from 'react-router-dom';


const BrandLogo = styled.span`
    color: white;
    font-style: italic;
    letter-spacing: 1px;
    font-size: 26px;
`;

const NavContainer = styled.div`
  height: 120px;
  background-color: #141414;
  overflow: hidden;
  padding: 0;
  padding-left: 10%;
  padding-right: 10%;
`;

const NavbarComponent = () => {
  return (
    <NavContainer>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><BrandLogo>Thunder store</BrandLogo></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/account">Sign-in</Nav.Link>
              <Nav.Link as={Link} to="/cartItems" className='ms-2 bg-secondary rounded'>Cart <AiOutlineShoppingCart /><Badge bg="dark" className='ms-2'>0</Badge></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="d-flex">
        <Form.Select style={{width: "20%"}} className="rounded-0">
          <option disabled>Select category</option>
          <option value={1}>Select category 1</option>
          <option value={2}>Select category 2</option>
          <option value={3}>Select category 3</option>
          <option value={4}>Select category 4 </option>
        </Form.Select>
        <Form.Control className='rounded-0' placeholder='Search the store'/>
      </Container>
    </NavContainer>
  )
}

export default NavbarComponent