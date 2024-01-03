// src/components/Dashboard.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import HeaderComponent from './HeaderComponent';


const Dashboard = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Container fluid style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Use "minHeight" instead of "height" to ensure the container takes at least the full viewport height */}
      <Row style={{ flex: 1, overflow: 'hidden' }}>
        <Col
          xs={12}
          md={isSidebarVisible ? 3 : 0}
          lg={isSidebarVisible ? 2 : 0}
          style={{
            overflow: 'hidden',
            transition: 'width 0.3s ease',
            position: 'relative',
            paddingLeft: 0,
            paddingRight: 0, 
          }}
        >
          {isSidebarVisible && <Sidebar />}
        </Col>
        <Col xs={12} md={isSidebarVisible ? 9 : 12} lg={isSidebarVisible ? 10 : 12} style={{ flex: 1 }}>
          <HeaderComponent onToggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
          <MainContent />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
