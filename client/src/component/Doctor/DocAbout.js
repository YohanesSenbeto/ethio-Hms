import React, { Component } from "react";
import Navber from "./DocNavbar";
import { MDBContainer } from "mdbreact";
import Homeimage from "../Homeimage";
import Footer from "../Footer";

class DocAbout extends Component {
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
                        <p className="text-white"></p>
                    </blockquote>
                </MDBContainer>

                <br></br>
                <Footer />
            </div>
        );
    }
}

export default DocAbout;
