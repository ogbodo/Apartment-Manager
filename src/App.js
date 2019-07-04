import React from "react";

import "./App.css";
import { Route } from "react-router-dom";
import Navs from "./components/Nav";
import Img from "./components/Img";
import { Container, Row, Col } from "react-bootstrap";

import Dashboard from "./components/Homepage";
import Login from "./components/accounts/Login";
import Signup from "./components/accounts/Signup";
import AgentDashboard from "./components/AgentDashboard";

function Header() {
  return (
    <header className="main-header">
      <Container>
        <Row>
          <Col sm={1}>
            <Img />
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
      <Route path="/login" component={Login} />
      <Route path="/Signup/" component={Signup} />
      <Route path="/agent/" component={AgentDashboard} />
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
