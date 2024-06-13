import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small   pt-4 default-color">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase font-weight-bold">
                                Contact us:
                            </h5>
                            <p>EMAIL:info@hospitalmanagementsystem.et</p>
                            <p>Phone no: +251-11-123-4567</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3" />

                        <div className="col-md-6 mb-md-0 mb-3">
                            <h5 className="text-uppercase font-weight-bold">
                                Address:
                            </h5>
                            <p>
                                {" "}
                                Addis Ababa, Ethiopia Around Ras Desta Hospital
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3 default-color-dark">
                    © 2024 Copyright:
                    <span> info@hospitalmanagementsystem.et</span>
                </div>
            </footer>
        );
    }
}

export default Footer;
