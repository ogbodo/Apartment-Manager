import React, { useState, useContext } from "react";

import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Navs from "./components/Nav";
import Img from "./components/Img";
import { Container, Row, Col } from "react-bootstrap";
import { AuthenticatedUser } from "./components/AppContext";

import Dashboard from "./components/Homepage";
import Login from "./components/accounts/Login";
import Signup from "./components/accounts/Signup";
import AgentDashboard from "./components/AgentDashboard";
import Address from "./components/Apartment/Address";
import Price from "./components/Apartment/Price";
import Description from "./components/Apartment/Description";
import Features from "./components/Apartment/Features";
import MyLeads from "./components/MyLeads";
// import { AuthenticatedUser } from "../AppContext";

function Header() {
  return (
    <header className="main-header">
      <Container>
        <Row>
          <Col sm={1}>
            <div />
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

function ProtectedRoute(props) {
  const [user, setUser] = useContext(AuthenticatedUser);

  if (!user.email) {
    console.log(user);
    return <Redirect to="/login" />;
  }
  console.log(user);
  return <Route {...props} />;
}

function App() {
  const userHook = useState({
    fullName: "Izuchukwu Matthias",
    sex: "Female",
    phone: "08136503501",
    email: "izuchukwu@gmail.com",
    Address: "opposite police check point Nyanya",
    apartmentsInfo: "apartmentID"
  });
  return (
    <AuthenticatedUser.Provider value={userHook}>
      <div>
        <Header />
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/Signup/" component={Signup} />
        {/* <Route path="/agent/" component={AgentDashboard} /> */}
        <Route path="/agent/" component={MyLeads} />
        {/* <Route path="/agent/" component={Price} /> */}
        {/* <Route path="/agent/" component={Description} /> */}
        {/* <ProtectedRoute path="/agent/" component={AgentDashboard} /> */}
        <Footer />
      </div>
    </AuthenticatedUser.Provider>
  );
}

function Footer() {
  return (
    <footer
      className="main-header"
      style={{ textAlign: "center", fontWeight: "bold" }}
    >
      © 2019 Info.com - All Rights Reserved.
    </footer>
  );
}

export default App;
