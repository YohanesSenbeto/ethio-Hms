import React, { Component } from "react";
import Navber from "./EmpNavbar";
import { MDBContainer } from "mdbreact";

import Homeimage from "../Homeimage";
import Footer from "../Footer";

class EmpAbout extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Navber />
                <Homeimage />

                <br></br>
                <br></br>
                <h1 className="head text-white" align="center">
                    {" "}
                    About Us{" "}
                </h1>
                <br></br>
                <br></br>

                <MDBContainer>
                    <blockquote className="blockquote">
                        <p className="text-white">
                            At Hospital Management System, we are committed to
                            setting new standards in healthcare delivery. We
                            prioritize patient care and safety above all else,
                            ensuring that each individual receives personalized
                            attention and effective treatment. With a focus on
                            innovation and continuous improvement, we strive to
                            enhance the health and well-being of our community.
                        </p>
                    </blockquote>
                </MDBContainer>

                <br></br>
                <Footer />
            </div>
        );
    }
}

export default EmpAbout;
