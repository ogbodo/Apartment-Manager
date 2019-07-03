import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navs from "./components/Nav";
import Img from "./components/Img";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <header className="main-header">
      <Container>
        <Row>
          <Col sm={1}>
            <Img id="logo" />
          </Col>
          <Col sm={11}>
            <Navs />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact component={Dashboard} />
      {/* <Route path="/DriverPage" component={DriversPage} /> */}
      {/* <Route path="/TripsPage/:id" component={TripsPage} /> */}
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="main-header" style={{ textAlign: "center" }}>
      © 2019 Info.com - All Rights Reserved.
    </footer>
  );
}

export default App;
