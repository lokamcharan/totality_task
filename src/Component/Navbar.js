import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <div className="Nav-container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src="./booking.png" alt="booking-logo" />
              Book Your Chance
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/cart">
                  Cart
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login/Signup
                </Nav.Link>
                <NavDropdown title="Filters" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Location
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Number Of Bedrooms
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Price</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarComponent;
