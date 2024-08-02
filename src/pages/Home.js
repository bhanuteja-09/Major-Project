import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../assets/profile.jpg'; // Ensure this path is correct
import './Home.css'; // Import custom CSS for Home

const Home = () => {
  return (
    <div className="home-container">
      <Container className="home-jumbotron mt-5 pt-5 text-center">
        <Row>
          <Col md={6} className="text-md-left">
            <h1>Welcome to HireCheck!</h1>
            <p>Your gateway to finding the perfect job12.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <Image src={profileImage} roundedCircle />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
