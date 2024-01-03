import React from "react";
import {Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const HeaderComponent = ({ onToggleSidebar, isSidebarVisible }) => {
  const navigate = useNavigate();

  const headerStyle = {
    backgroundColor: "#002DCA",
    color: "white",
    width: "100%",
    position: "fixed",
    top:0,
  };

  const textStyle = {
    color: "white",
    margin: "10px",
  };

  const logoutButtonStyle = {
    float: "right",
  };

  const toggleStyle = {
    margin: "10px",
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  return (
    <Navbar style={headerStyle} expand="lg">
      <Button
        variant={isSidebarVisible ? "outline-light" : "outline-dark"}
        onClick={onToggleSidebar}
        style={toggleStyle}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Navbar.Brand>
        <span style={textStyle}>Dashboard</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <span style={textStyle}>Home</span>
          </Nav.Link>
        </Nav>
        <Nav style={logoutButtonStyle}>
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderComponent