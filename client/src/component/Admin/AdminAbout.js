import React, { Component } from "react";
import Navber from "./AdminNavbar";
import { MDBContainer } from "mdbreact";

import Homeimage from "../Homeimage";
import Footer from "../Footer";

class AdminAbout extends Component {
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
                        {" "}
                        Who We Are Hospital Management System is a premier
                        healthcare provider in Ethiopia, offering cutting-edge
                        medical services and advanced healthcare solutions. We
                        operate several super specialty hospitals and
                        state-of-the-art daycare centers across major cities,
                        including Addis Ababa.
                        <p className="text-white"></p>
                    </blockquote>
                </MDBContainer>

                <br></br>
                <Footer />
            </div>
        );
    }
}

export default AdminAbout;
