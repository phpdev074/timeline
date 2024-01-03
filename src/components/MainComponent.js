import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from "axios";
import UserComponent from "./UserComponent";

const MainComponent = () => {
    const [userInfo, setUserInfo] = useState();

    const cardBodyStyle = {
        width: "300px",
        height: "50px",
        textDecoration: 'none',

    };

    useEffect(() => {
        const getUserData = async () => {
            try {
                const jwtToken = localStorage.getItem("jwtToken");
                const headers = {
                    Authorization: jwtToken,
                };
                const response = await axios.get(
                    "http://localhost:5005/api/user-data",
                    { headers }
                );
                setUserInfo(response?.data?.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUserData();
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    <div style={cardBodyStyle}>
                        <Col>
                            <Link to="/user-info" style={{ textDecoration: 'none' }}>
                                <Card>
                                    <Card.Body>
                                        <h2>User Count</h2>
                                        <p>{userInfo?.length}</p>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </div>
                    <div style={cardBodyStyle}>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <h2>Another Card</h2>
                                    <p>42</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default MainComponent;
