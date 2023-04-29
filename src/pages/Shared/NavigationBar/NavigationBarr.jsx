import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const NavigationBarr = () => {
  const { user ,logOut } = useContext(AuthContext);
  // console.log(user)

  const handleLogout =() =>{
    logOut()
    .then()
    .catch(error=> console.log(error))
  }
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/category/0">Home</Link>

              <Nav.Link>About</Nav.Link>
              <Nav.Link>Career</Nav.Link>
            </Nav>
            <Nav>{user && <FaUserCircle className="fs-2" />}</Nav>
            {user ? (
              <Button onClick={handleLogout} variant="dark">Logout</Button>
            ) : (
              <Link to="/login">
                <Button variant="dark">Login</Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBarr;
