import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from "axios";
import { Link } from 'react-router-dom';

const MainComponent = () => {
  const [userInfo, setUserInfo] = useState();
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      const newFontSize = Math.max(12, Math.min(24, window.innerWidth / 40));
      setFontSize(newFontSize);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const jwtToken = localStorage.getItem("jwtToken");
        const headers = {
          Authorization: jwtToken,
        };
        const response = await axios.get(
          "http://ludhianahosierycentre.co.in:5005/api/user-data",
          { headers }
        );
        setUserInfo(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);
  const containerStyle={
    marginTop:"5%"
  }
  const rowStyle = {
    marginTop:"1.5%"
  }
  return (
    <>
      <Container style={containerStyle}>
        <Row>
          <Col xs={12} sm={6} md={4} lg={4} xl={4} style={{ fontSize: `${fontSize}px` }}>
          <Link to="/dashboard/user-data" style={{ textDecoration: 'none' }}>
            <Card className="mb-3" style={{ backgroundColor: '#170d36', color: 'white', borderRadius:"20px", fontFamily: "'Playfair Display', serif" }}>
              <Card.Body>
                <h2>Total Users</h2>
                <p>{userInfo?.totalNumberOfUser}</p>
              </Card.Body>
            </Card>
            </Link>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} xl={4} style={{ fontSize: `${fontSize}px` }}>
            <Card className="mb-3" style={{ backgroundColor: '#170d36', color: 'white' ,  borderRadius:"20px",  fontFamily: "'Playfair Display', serif"}}>
              <Card.Body>
                <h2>Total Active User</h2>
                <p> 2</p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} xl={4} style={{ fontSize: `${fontSize}px` }}>
            <Card className="mb-3" style={{ backgroundColor: '#170d36', color: 'white' ,  borderRadius:"20px",  fontFamily: "'Playfair Display', serif"}}>
              <Card.Body>
                <h2>Total Journey</h2>
                <p> 3</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col xs={12} sm={6} md={4} lg={4} xl={4} style={{ fontSize: `${fontSize}px` }}>
            <Card className="mb-3" style={{ backgroundColor: '#170d36', color: 'white', borderRadius:"20px",   fontFamily: "'Playfair Display', serif" }}>
              <Card.Body>
                <h2>Total Journey Per Week</h2>
                <p> 1</p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} xl={4} style={{ fontSize: `${fontSize}px` }}>
            <Card className="mb-3" style={{ backgroundColor: '#170d36', color: 'white', borderRadius:"20px",   fontFamily: "'Playfair Display', serif" }}>
              <Card.Body>
                <h2>Total Journey Per Month</h2>
                <p> 2</p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4} xl={4} style={{ fontSize: `${fontSize}px` }}>
            <Card className="mb-3" style={{ backgroundColor: '#170d36', color: 'white',   borderRadius:"20px", fontFamily: "'Playfair Display', serif"}}>
              <Card.Body>
                <h2>Total Journery per month</h2>
                <p> 3</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainComponent;
