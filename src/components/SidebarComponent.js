import React from "react";
import { Image, Nav, Button } from "react-bootstrap";
import { COMPANY_LOGO, WEBSITE_NAME } from "../utils/constants.js";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const SidebarComponent = ({ isSidebarVisible }) => {
  const navigate = useNavigate();

  const sidebarStyle = {
    position: 'relative',
    backgroundColor: '#170d36',
    color: 'white',
    overflow: 'hidden',
    borderRight: '2px solid #fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: isSidebarVisible ? '200px' : '0',
    transition: 'width 0.3s ease',
    height:"100vh",
    position:"fixed"
  };

  const logoStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
    width: "100px",
    marginTop: "30px",
  };

  const textStyle = {
    color: "white",
    textAlign: "center",
    fontFamily: "'Playfair Display', serif",
    textDecoration: 'none',
  };

  const navItemStyle = {
    marginBottom: "10px",
    textAlign: "center",
  };

  const navItemStyles = {
    marginBottom: "10px",
    textAlign: "left",
    marginLeft: "10%",
  };

  const buttonStyle = {
    width: "80%",
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  const borderStyle = {
    borderBottom: "1px solid #fff",
    paddingBottom: "10px",
  };

  return (
    <div style={sidebarStyle}>
      <Nav className="flex-column">
        <Nav.Item style={navItemStyle}>
          <Image
            src={COMPANY_LOGO}
            alt={WEBSITE_NAME}
            roundedCircle
            style={logoStyle}
          />
        </Nav.Item>
        <Nav.Item style={{ ...navItemStyle, ...borderStyle }}>
          <span style={textStyle}>{WEBSITE_NAME}</span>
        </Nav.Item>
        <Nav.Item style={navItemStyles}>
          <Link to="/dashboard" style={textStyle}>Home</Link>
        </Nav.Item>
        <Nav.Item style={navItemStyles}>
          <Link to="/dashboard/user-data" style={textStyle}>Users</Link>
        </Nav.Item>
        <Nav.Item style={navItemStyles}>
          <Link to="/dashboard/contact-us" style={textStyle}>Contact Us</Link>
        </Nav.Item>
        <Nav.Item style={navItemStyles}>
          <Link to="/dashboard/payment-history" style={textStyle}>Payment History</Link>
        </Nav.Item>
      </Nav>
      <Nav>
        <Nav.Item style={navItemStyle}>
          <Button
            style={buttonStyle}
            variant="outline-light"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SidebarComponent;
