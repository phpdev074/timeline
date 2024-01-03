import React from 'react';
import { Navbar as BootstrapNavbar, Button } from 'react-bootstrap';

const Navbar = ({ onToggleSidebar }) => {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <Button variant="outline-light" onClick={onToggleSidebar}>
        Toggle Sidebar
      </Button>
    </BootstrapNavbar>
  );
};

export default Navbar