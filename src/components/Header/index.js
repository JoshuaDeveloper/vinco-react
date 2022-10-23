import React from "react";
import { Navbar, Container, Button, Form } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Vinco Games</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
          <Button variant="outline-light">Login</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;
