import React, { Component } from "react";
import "./Contact.css";
import Navber from "../Navber/Navber";
import Footer from "../Footer";
import Homeimage from "../Homeimage";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Navber />
        <div className="md-5">
          <Homeimage />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="mt-5">
          <Container className="my-5">
            <Row className="justify-content-center">
              <Col md={8}>
                <h1 className="text-center mb-4">Contact Us</h1>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>About Ethio HMS</Card.Title>
                    <Card.Text>
                      Ethio Hospital Management System (Ethio HMS) is a
                      comprehensive healthcare solution designed to streamline
                      the management of hospital operations. Our system offers
                      advanced features such as patient registration,
                      appointment scheduling, medical records management, and
                      billing, all in one user-friendly platform. Ethio HMS is
                      committed to improving the efficiency and quality of
                      healthcare services in Ethiopia.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter your message"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
