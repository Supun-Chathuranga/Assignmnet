import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavbarComponent() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Navbar expand="lg" bg="body-tertiary">
      <Container>
        <Navbar.Brand>React-Recipe-Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={handleRefresh}>Refresh Page</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
