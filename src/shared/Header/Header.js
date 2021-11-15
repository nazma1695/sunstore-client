import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/home">
            <img
              src={logo}
              width="100%"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/collections">
                Collections
              </Nav.Link>
              {user.email && (
                <Nav.Link as={HashLink} to="/addservices">
                  Add Collection
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={HashLink} to="/offer">
                  Manage Offer
                </Nav.Link>
              )}
              {user.email && (
                <Nav.Link as={HashLink} to="/myOrder">
                  My Order
                </Nav.Link>
              )}
              <Nav.Link as={HashLink} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>

            <span className="mt-1  me-2 text-white"> {user.displayName} </span>
            {user.email ? (
              <Link to="/login">
                <button onClick={logOut} className="btn btn-danger">
                  Log-out
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary me-2">Log In</button>
              </Link>
            )}
            {user.email && (
              <Nav.Link
                as={HashLink}
                to="/dashboard"
                style={{ color: "#cccced", fontWeight: "bold" }}
              >
                Dashboard
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
