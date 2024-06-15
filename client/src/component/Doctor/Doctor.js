import React, { Component } from "react";
import Navber from "./DocNavbar";
import axios from "axios";
import Footer from "../Footer";

class Doctor extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      phone_no: "46456456",
      salary: "",
      shift_time: "",
      specialisation: "",
      patients: [],
      isLoading: true,
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("/doctor/profile", {
        headers: {
          authorization: sessionStorage.getItem("usertoken"),
        },
      })
      .then((res) => {
        const details = res.data;
        this.setState({
          first_name: details.first_name,
          last_name: details.last_name,
          email: details.email,
          address: details.address,
          salary: details.salary,
          shift_time: details.shift_time,
          specialisation: details.specialisation,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("Error fetching profile:", err);
        this.setState({ error: "Failed to fetch profile" });
      });

    axios
      .get("/doctor/patients", {
        headers: {
          authorization: sessionStorage.getItem("usertoken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ patients: res.data, isLoading: false });
      })
      .catch((err) => {
        console.log("Error fetching patients:", err);
        this.setState({ error: "Failed to fetch patients" });
      });
  }

  render() {
    const { patients, isLoading, error } = this.state;

    return (
      <div className="bg-dark">
        <Navber />
        <br />
        <h2 className="text-white text-center">Doctor</h2>
        <h3 className="text-white text-center">Welcome!</h3>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="container ml-3">
              <div className="jumbotron" style={{ backgroundColor: "#e0e0e0" }}>
                <h2 className="text-primary">Doctor Information</h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>
                        {this.state.first_name} {this.state.last_name}
                      </td>
                    </tr>
                    <tr>
                      <td>Specialization</td>
                      <td>{this.state.specialisation}</td>
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
                      <td>Salary Information</td>
                      <td>{this.state.salary}</td>
                    </tr>
                    <tr>
                      <td>Shift Time</td>
                      <td>{this.state.shift_time}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="jumbotron" style={{ backgroundColor: "#e0e0e0" }}>
              <h2 className="text-primary">Patients Assigned</h2>
              <div className="list-group-flush">
                {isLoading ? (
                  <h4>Loading...</h4>
                ) : error ? (
                  <p className="text-danger">{error}</p>
                ) : (
                  patients.map((patient) => (
                    <div key={patient.patient_id} className="list-group-item">
                      <p className="mb-0">
                        <i className="fab fa-slack-hash fa-2x mr-4 purple p-3 white-text rounded"></i>
                        {patient.first_name} {patient.last_name}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Doctor;
