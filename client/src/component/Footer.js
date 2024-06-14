// src/components/Footer.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container>
        <Row className="py-4">
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <h5 className="font-weight-bold">About Us</h5>
            <p>
              We provide top-notch healthcare management services tailored for
              Ethiopian hospitals.
            </p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5 className="font-weight-bold">Contact</h5>
            <p>Email: info@ethiohms.com</p>
            <p>Phone: +251 123 456 789</p>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h5 className="font-weight-bold">Follow Us</h5>
            <a href="https://facebook.com" className="text-light mr-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-light mr-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-light">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </Col>
        </Row>
        <Row className="py-2">
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Ethio HMS. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
