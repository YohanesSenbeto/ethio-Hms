import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <Container fluid className="p-3 bg-light">
      <header className="bg-primary text-white text-center py-5 mb-5">
        <h1>Ethio Hospital Management System</h1>
        <p>Providing world-class healthcare services in Ethiopia</p>
      </header>

      <section id="about-us" className="mb-5">
        <Container>
          <h3 className="text-center text-primary mb-4">About Us</h3>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">Our Goal</Card.Title>
                  <Card.Text>
                    Our goal is to ensure that every individual receives
                    world-class medical treatment in a compassionate and
                    efficient manner, irrespective of their socio-economic
                    background.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">Who We Are</Card.Title>
                  <Card.Text>
                    Hospital Management System is a premier healthcare provider
                    in Ethiopia, offering cutting-edge medical services and
                    advanced healthcare solutions. We operate several super
                    specialty hospitals and state-of-the-art daycare centers
                    across major cities, including Addis Ababa.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="facilities" className="bg-light py-5 mb-5">
        <Container>
          <h3 className="text-center text-primary mb-4">Our Facilities</h3>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">
                    Super Specialty Hospitals
                  </Card.Title>
                  <Card.Text>
                    Our super specialty hospitals are strategically located in
                    key areas to provide accessible and comprehensive medical
                    care. Each hospital is equipped with state-of-the-art
                    infrastructure and advanced medical equipment to handle a
                    wide range of medical conditions and treatments.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">
                    Daycare Centers
                  </Card.Title>
                  <Card.Text>
                    Our daycare centers offer advanced medical services for
                    outpatient care. These centers are designed to provide quick
                    and efficient treatments, ensuring that patients receive the
                    necessary medical attention without the need for prolonged
                    hospital stays.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="services" className="py-5 mb-5">
        <Container>
          <h3 className="text-center text-primary mb-4">Our Services</h3>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">Patient Care</Card.Title>
                  <Card.Text>
                    We are dedicated to providing personalized and high-quality
                    medical care to every patient. Our services encompass a wide
                    range of specialties, ensuring that patients receive the
                    best possible treatment for their conditions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">
                    Surgical Procedures
                  </Card.Title>
                  <Card.Text>
                    With a focus on precision and expertise, our surgical teams
                    perform numerous successful surgeries each year. We are
                    equipped to handle complex surgical procedures, ensuring
                    optimal outcomes for our patients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">
                    Emergency and Critical Care
                  </Card.Title>
                  <Card.Text>
                    Our emergency and critical care units are designed to
                    provide rapid and effective treatment in life-threatening
                    situations. Our teams are trained to handle emergencies with
                    the utmost care and professionalism.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="team" className="bg-light py-5 mb-5">
        <Container>
          <h3 className="text-center text-primary mb-4">Our Team</h3>
          <Row>
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Text>
                    We take pride in our team of highly skilled doctors, nurses,
                    and healthcare professionals. Our staff is committed to
                    continuous learning and professional development, ensuring
                    that they are always at the forefront of medical
                    advancements and best practices. Their dedication and
                    expertise are the cornerstones of our success.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="technology" className="py-5 mb-5">
        <Container>
          <h3 className="text-center text-primary mb-4">
            Technology and Innovation
          </h3>
          <Row>
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Text>
                    At Hospital Management System, we believe in harnessing the
                    power of technology to improve healthcare delivery. Our
                    hospitals are equipped with the latest medical technologies
                    and our management systems are designed to streamline
                    operations, enhance patient care, and ensure efficient use
                    of resources.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="commitment" className="bg-light py-5 mb-5">
        <Container>
          <h3 className="text-center text-primary mb-4">Our Commitment</h3>
          <Row>
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Text>
                    We are committed to providing value-for-money healthcare
                    services without compromising on quality. Our aim is to make
                    advanced medical treatments accessible to everyone, ensuring
                    that all patients receive the care they need.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="impact" className="py-5 mb-5">
        <Container>
          <h3 className="text-center text-primary mb-4">Our Impact</h3>
          <Row>
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Text>
                    Over the years, Hospital Management System has made a
                    significant impact on the health and well-being of the
                    communities we serve. We have become a trusted healthcare
                    provider not only in Addis Ababa and other Ethiopian cities
                    but also in the surrounding regions. Our contributions to
                    healthcare have improved the lives of countless individuals
                    and families.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="future" className="bg-light py-5 mb-5">
        <Container>
          <h3 className="text-center text-primary mb-4">Looking Ahead</h3>
          <Row>
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Text>
                    As we look to the future, we are excited about the
                    possibilities for growth and improvement. We are planning to
                    expand our facilities and increase our bed capacity to serve
                    more patients. Our commitment to excellence in healthcare
                    remains steadfast, and we are dedicated to continuing our
                    legacy of exceptional patient care.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="py-5 mb-5">
        <Container>
          <h3 className="text-center text-primary mb-4">Contact Us</h3>
          <Row>
            <Col>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Text>
                    For more information about our services or to schedule an
                    appointment, please contact us at:
                  </Card.Text>
                  <Card.Text>
                    <strong>Phone:</strong> +251-11-123-4567 <br />
                    <strong>
                      Email:
                    </strong> info@hospitalmanagementsystem.et <br />
                    <strong>Address:</strong> [Hospital Address], Addis Ababa,
                    Ethiopia
                  </Card.Text>
                  <Button variant="primary">Get in Touch</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default LandingPage;
