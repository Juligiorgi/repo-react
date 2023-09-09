import { NavLink } from 'react-router-dom';
import {Container, Nav,NavDropdown} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {CardWidget} from "../CardWidget/CardWidget"



export const NavBar = () =>{
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Lemons</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink}to='/'> Inicio </Nav.Link>
            <NavDropdown title="Ropa" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/categoria/Calzas'>Calzas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/Tops'>Tops</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/categoria/Buzos'>Buzos</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CardWidget/> 
    </Navbar>
  );
}



