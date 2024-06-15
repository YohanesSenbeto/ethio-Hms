import React, { Component } from "react";
import Navbar from "./PatientNavbar";
import Footer from "../Footer";
import doc_img from "./doctor1.jpg";
import "mdbreact";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import axios from "axios";

class PatientHome extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      phone_no: "",
      disease: "",
      doctor_firstname: "",
      doctor_lastname: "",
      specialist: "",
      medicine_cost: "",
      misc_charge: "",
      room_charge: "",
      operation_charge: "",
      bill: [],
    };
  }

  componentDidMount() {
    axios
      .get("/patient/details", {
        headers: {
          authorization: sessionStorage.getItem("usertoken"),
        },
      })
      .then((res) => {
        const details = res.data[0];
        console.log(res);
        this.setState({
          first_name: details.first_name,
          last_name: details.last_name,
          address: details.address,
          email: details.email,
          phone_no: details.phone_no,
          disease: details.disease,
        });
      });

    axios
      .get("/patient/doctor", {
        headers: {
          authorization: sessionStorage.getItem("usertoken"),
        },
      })
      .then((res) => {
        if (res.data.length !== 0) {
          const details = res.data[0];
          this.setState({
            doctor_firstname: details.doctor_firstname,
            doctor_lastname: details.doctor_lastname,
            specialist: details.specialisation,
          });
        } else {
          this.setState({
            doctor_firstname: "No Doctor Assigned",
          });
        }
      });

    axios
      .get("/patient/bill", {
        headers: {
          authorization: sessionStorage.getItem("usertoken"),
        },
      })
      .then((res) => {
        this.setState({
          medicine_cost: res.data[0].medicine_cost,
          misc_charge: res.data[0].misc_charge,
          room_charge: res.data[0].room_charge,
          operation_charge: res.data[0].operation_charge,
        });
      });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
        <Navbar />
        <Container className="my-5">
          <h2 className="text-center text-primary my-3">Patient Home</h2>
          <h3 className="text-center text-primary my-3">Welcome!</h3>

          <Row>
            <Col md={6} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary">
                    Patient Information
                  </Card.Title>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>
                          {this.state.first_name} {this.state.last_name}
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{this.state.email}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>{this.state.address}</td>
                      </tr>
                      <tr>
                        <td>Phone Number</td>
                        <td>{this.state.phone_no}</td>
                      </tr>
                      <tr>
                        <td>Disease</td>
                        <td>{this.state.disease}</td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary">Patient Bill</Card.Title>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Medicine Cost</td>
                        <td>{this.state.medicine_cost}</td>
                      </tr>
                      <tr>
                        <td>Operation Charge</td>
                        <td>{this.state.operation_charge}</td>
                      </tr>
                      <tr>
                        <td>Room Charge</td>
                        <td>{this.state.room_charge}</td>
                      </tr>
                      <tr>
                        <td>Miscellaneous Charge</td>
                        <td>{this.state.misc_charge}</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>
                          {parseFloat(this.state.medicine_cost) +
                            parseFloat(this.state.operation_charge) +
                            parseFloat(this.state.room_charge) +
                            parseFloat(this.state.misc_charge)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Col>

            <Col md={12} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body className="text-center">
                  <Card.Title className="text-primary">
                    Doctor Information
                  </Card.Title>
                  <Image
                    src={doc_img}
                    thumbnail
                    className="my-3"
                    style={{ maxWidth: "200px" }}
                  />
                  <h4>
                    <strong>
                      {this.state.doctor_firstname} {this.state.doctor_lastname}
                    </strong>
                  </h4>
                  <h5 className="text-primary">
                    <strong>{this.state.specialist}</strong>
                  </h5>
                  <p>The doctor currently assigned to the patient</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default PatientHome;
