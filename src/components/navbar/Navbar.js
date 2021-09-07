import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";


const NavBar = () => {

        return(
           
<Navbar class= "navbar-expand-lg d-inline-flex">
  <Container  >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="menu ">
          <NavDropdown title="Motherboard" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Nuevos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Refubrished</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Teclados" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Gamers</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Rollup</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Inalámbricos</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Discos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">SSD</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Mecánico</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Externos</NavDropdown.Item>
          </NavDropdown>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};
export default NavBar;