import './Navbar.css';
import {CardWidget} from '../CardWidget/CardWidget';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';



export const NavBar =() => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to = '/'>Lemons</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to= '/'>Inicio</Nav.Link>
            <NavDropdown title="Ropa" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to= '/Categoria/Calzas'>Calzas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to= '/Categoria/Tops'>Tops</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to= '/Categoria/Buzos'>Buzos</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    <CardWidget/> <h1 className="number">0</h1>
    </Navbar>
  );
}

    

