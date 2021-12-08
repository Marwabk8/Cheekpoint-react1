import{Navbar,Container,NavDropdown,Nav} from "react-bootstrap"

function Nave (){


    return(
    
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Automechanika</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About us</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">For Exibithor</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">For vistors</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">For journaliste</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)


}

export default Nave;