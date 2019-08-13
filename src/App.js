import React, { useContext } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navs from "./components/Nav";
import Img from "./components/Img";
import { Container, Row, Col } from "react-bootstrap";
import { AuthenticatedUser } from "./components/AppContext";
import fire from "./components/accounts/config/fire";
import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "./components/apolloSetup";

/**Components */
import Homepage from "./components/Homepage";
import Login from "./components/accounts/Login";
import Signup from "./components/accounts/Signup";
import AgentDashboard from "./components/AgentDashboard";
import ForSale from "./components/Apartment/ApartmentsForSale";
import ForRent from "./components/Apartment/ApartmentsForRent";
import Address from "./components/Apartment/Address";
import Price from "./components/Apartment/Price";
import Description from "./components/Apartment/Description";
import Features from "./components/Apartment/Features";
import MyLeads from "./components/MyLeads";

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

fire.auth().onAuthStateChanged(user => {
  const [, setUser] = useContext(AuthenticatedUser);

  setUser(user);
});

function ProtectedRoute(props) {
  // const [user] = useContext(AuthenticatedUser);
  // console.log(user);
  // console.log("AuthenticatedUser[0]");
  // return <>{user ? <Route {...props} /> : <Redirect to="/" />}</>;
}

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthenticatedUser.Provider value={{}}>
        <div>
          <Header />
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={MyLeads} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/agent" component={AgentDashboard} />
          <Route path="/sale" component={ForSale} />
          <Route path="/rent" component={ForRent} />
          {/* <ProtectedRoute path="/agent" exact component={AgentDashboard} /> */}
          {/* <Route path="/agent/" component={Price} /> */}
          {/* <Route path="/agent/" component={Description} /> */}
          {/* <ProtectedRoute path="/agent/" component={AgentDashboard} /> */}
          <Footer />
        </div>
      </AuthenticatedUser.Provider>
    </ApolloProvider>
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
