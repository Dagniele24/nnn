import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer>
      <Container style={{ marginTop: '150px', marginLeft: '25%' }}>
        <Row className="mt-5">
          <Col className="d-flex flex-row justify-content-start">
            {/* Replace with your React-Bootstrap icons */}
            {/* Example: <FacebookIcon width={25} height={25} fill="white" /> */}
            {/* Repeat for other icons */}
          </Col>
        </Row>
        <Row className="d-flex flex-row flex-wrap justify-content-start">
          <Col className="lista mt-4">
            <ul>
              <li>Audio and Subtitles</li>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          {}
        </Row>
        <Row className="d-flex justify-content-start">
          <Col>
            <Button variant="outline-primary" className="colore">
              Service Code
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="p pt-2">©1997-2019 Netflix, Inc. (i-0d00fcda2fdf9c0de)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;