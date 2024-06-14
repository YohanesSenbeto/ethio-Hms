import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./component/Home/Home";
import About from "./component/About/About";
import Gallery from "./component/Gallery/Gallery";
import Contact from "./component/Contact/Contact";
import PatientLogin from "./component/Login/PatientLogin";
import DoctorLogin from "./component/Login/DoctorLogin";
import EmployeeLogin from "./component/Login/EmployeeLogin";
import AdministratorLogin from "./component/Login/AdministratorLogin";
import PatientHome from "./component/Patient/PatientHome";
import PatHome from "./component/Patient/PatHome";
import PatientAbout from "./component/Patient/PatientAbout";
import PatientGallery from "./component/Patient/PatientGallery";
import PatientContact from "./component/Patient/PatientContact";
import Doctor from "./component/Doctor/Doctor";
import DocHome from "./component/Doctor/DocHome";
import DocAbout from "./component/Doctor/DocAbout";
import DocGallery from "./component/Doctor/DocGallery";
import DocContact from "./component/Doctor/DocContact";
import Employee from "./component/Employee/Employee";
import EmpHome from "./component/Employee/EmpHome";
import EmpAbout from "./component/Employee/EmpAbout";
import EmpGallery from "./component/Employee/EmpGallery";
import EmpContact from "./component/Employee/EmpContact";
import Admin from "./component/Admin/Admin";
import AdHome from "./component/Admin/AdHome";
import AdminAbout from "./component/Admin/AdminAbout";
import AdminGallery from "./component/Admin/AdminGallery";
import AdminContact from "./component/Admin/AdminContact";
import PatientReg from "./component/PatientReg/PatientReg";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar
          bg="primary"
          variant="dark"
          expand="lg"
          fixed="top"
          className="mb-4"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              Ethio Hospital
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/gallery">
                  Gallery
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/regPatient">
                  Patient Registration
                </Nav.Link>
                <NavDropdown title="Logins" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/patient/login">
                    Patient Login
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/doctors/login">
                    Doctor Login
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/employee/login">
                    Employee Login
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/administrator/login">
                    Administrator Login
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Patient" id="patient-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/patient/login/patient_home">
                    Patient Home
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/patient/login/home">
                    Home
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/patient/login/about">
                    About
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/patient/login/gallery">
                    Gallery
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/patient/login/contact">
                    Contact
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Doctor" id="doctor-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/doctors/login/doctor_home">
                    Doctor Home
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/doctors/login/home">
                    Home
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/doctors/login/about">
                    About
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/doctors/login/gallery">
                    Gallery
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/doctors/login/contact">
                    Contact
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Employee" id="employee-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/employee/login/employee_home"
                  >
                    Employee Home
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/employee/login/home">
                    Home
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/employee/login/about">
                    About
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/employee/login/gallery">
                    Gallery
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/employee/login/contact">
                    Contact
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Administrator" id="admin-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/administrator/login/admin_home"
                  >
                    Admin Home
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/administrator/login/home">
                    Home
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/administrator/login/about">
                    About
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/administrator/login/gallery">
                    Gallery
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/administrator/login/contact">
                    Contact
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div style={{ marginTop: "75px" }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/regPatient" component={PatientReg} />
          <Route exact path="/patient/login" component={PatientLogin} />
          <Route exact path="/doctors/login" component={DoctorLogin} />
          <Route exact path="/employee/login" component={EmployeeLogin} />
          <Route
            exact
            path="/administrator/login"
            component={AdministratorLogin}
          />
          <Route
            exact
            path="/patient/login/patient_home"
            component={PatientHome}
          />
          <Route exact path="/patient/login/home" component={PatHome} />
          <Route exact path="/patient/login/about" component={PatientAbout} />
          <Route
            exact
            path="/patient/login/gallery"
            component={PatientGallery}
          />
          <Route
            exact
            path="/patient/login/contact"
            component={PatientContact}
          />
          <Route exact path="/doctors/login/doctor_home" component={Doctor} />
          <Route exact path="/doctors/login/home" component={DocHome} />
          <Route exact path="/doctors/login/about" component={DocAbout} />
          <Route exact path="/doctors/login/gallery" component={DocGallery} />
          <Route exact path="/doctors/login/contact" component={DocContact} />
          <Route
            exact
            path="/employee/login/employee_home"
            component={Employee}
          />
          <Route exact path="/employee/login/home" component={EmpHome} />
          <Route exact path="/employee/login/about" component={EmpAbout} />
          <Route exact path="/employee/login/gallery" component={EmpGallery} />
          <Route exact path="/employee/login/contact" component={EmpContact} />
          <Route
            exact
            path="/administrator/login/admin_home"
            component={Admin}
          />
          <Route exact path="/administrator/login/home" component={AdHome} />
          <Route
            exact
            path="/administrator/login/about"
            component={AdminAbout}
          />
          <Route
            exact
            path="/administrator/login/gallery"
            component={AdminGallery}
          />
          <Route
            exact
            path="/administrator/login/contact"
            component={AdminContact}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
