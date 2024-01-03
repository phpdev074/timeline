// src/components/Sidebar.js
import React from "react";
import { Image, Nav, Button } from "react-bootstrap";
import { COMPANY_LOGO, WEBSITE_NAME } from "../utils/constants.js";
const Sidebar = () => {
  const sidebarStyle = {
    backgroundColor: "#002DCA",
    padding: "0px",
    color: "white",
    overflow: "hidden", // Hide the scroll bar
    height:"100%"
  };

  const logoStyle = {
    width: "100px",
    height: "100px",
    margin: "5px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%", 
  };
  const textStyle = {
    color: "white",
    marginLeft: "25%",
    display: "block",

  };

  const buttonStyle = {
    width: "100%",
    borderRadius: "20px",
    marginBottom: "5px",
  };

  return (
    <Nav className="flex-column" style={sidebarStyle}>
      <Nav.Item>
        <Image
          src={COMPANY_LOGO}
          alt={WEBSITE_NAME}
          roundedCircle
          style={logoStyle}
        />
      </Nav.Item>
      <Nav.Item>
        <span style={textStyle}>{WEBSITE_NAME}</span>
      </Nav.Item>
      <Nav.Item>
        <Button variant="outline-light" style={buttonStyle}>
          <span style={textStyle}>Contact</span>
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="outline-light" style={buttonStyle}>
          <span style={textStyle}>Contact</span>
        </Button>
      </Nav.Item>{" "}
      <Nav.Item>
        <Button variant="outline-light" style={buttonStyle}>
          <span style={textStyle}>Contact</span>
        </Button>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;