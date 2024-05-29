import { Link } from "wouter";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function CustomNavLink({ to, name }: { to: string; name: string }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <Nav.Link as={Link} to={to}>
        {name}
      </Nav.Link>
      <div className="border-bottom-nav-link w-75 "></div>
    </div>
  );
}

export default function GrattyNavbar() {
  let isAuthenticated: boolean = useAuth0().isAuthenticated;
  const userID = useAuth0().user!!.sub;
  return (
    <Container fluid className="mb-2">
      <Navbar expand="sm" className="bg-body-tertiary">
        <Navbar.Brand as={Link} to="/">
          GrattyLite
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <CustomNavLink to="/" name="Home"></CustomNavLink>
            <CustomNavLink to="/about" name="About"></CustomNavLink>
            {isAuthenticated ? (
              <>
                <CustomNavLink
                  to={`/${userID}/profile`}
                  name="Profile"
                ></CustomNavLink>
                <CustomNavLink
                  to={`/${userID}/lists`}
                  name="Lists"
                ></CustomNavLink>

                <div className="d-flex flex-column align-items-center">
                  <button className="nav-link" type="submit">
                    Log Out
                  </button>
                  <div className="border-bottom-nav-link w-75 "></div>
                </div>
              </>
            ) : (
              <CustomNavLink to="/login" name="Login"></CustomNavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
