// HeaderComponent.jsx

import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = ({ onToggleSidebar }) => {
  const headerStyle = {
    backgroundColor: "#170d36",
    color: "white",
    width: "100%",
    position: "fixed",
    top: 0,
  };

  const buttonStyle = {
    margin: "10px",
    borderColor: "transparent",
  };

  return (
    <Navbar style={headerStyle} expand="lg">
     
      <Navbar.Brand>
        <span style={{ color: "white", margin: "10px" }}>Dashboard</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
};

export default HeaderComponent;
