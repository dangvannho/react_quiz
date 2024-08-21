import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import config from "~/config";
import "./Header.scss";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container className="justify-content-between">
        <NavLink to={config.routes.home} className="navbar-brand">
          Quiz
        </NavLink>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={config.routes.home} className="nav-link">
              Home
            </NavLink>
            <NavLink to={config.routes.user} className="nav-link">
              User
            </NavLink>
            <NavLink to={config.routes.admin} className="nav-link">
              Admin
            </NavLink>
          </Nav>
        </Navbar.Collapse>

        <Nav className="gap-3">
          <Button variant="outline-dark">Login</Button>
          <Button variant="dark">Sign up</Button>
        </Nav>

        {/* <Nav>
          <NavDropdown title="Settings" id="basic-nav-dropdown">
            <NavDropdown.Item href="">Login</NavDropdown.Item>
            <NavDropdown.Item href="">Log out</NavDropdown.Item>
            <NavDropdown.Item href="">Profile</NavDropdown.Item>
          </NavDropdown>
        </Nav> */}
      </Container>
    </Navbar>
  );
}

export default Header;
