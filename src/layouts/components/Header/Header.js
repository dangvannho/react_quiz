import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import config from "~/config";
import "./Header.scss";
import { isAuthenticateSelector } from "~/redux/selectors";

function Header() {
  const navigate = useNavigate();
  const isAuthenticate = useSelector(isAuthenticateSelector);

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

        {isAuthenticate ? (
          <Nav>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Log out</NavDropdown.Item>
              <NavDropdown.Item href="">Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav className="gap-3">
            <Button
              variant="outline-dark"
              onClick={() => navigate(config.routes.login)}
            >
              Login
            </Button>
            <Button
              variant="dark"
              onClick={() => navigate(config.routes.signup)}
            >
              Sign up
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
