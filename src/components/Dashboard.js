import React from "react";
import { Container, Row } from "react-bootstrap";

function Layout() {
  return (
    <Container>
      <Row>
        <h1>Hi this is the body</h1>
      </Row>
    </Container>
  );
}

function Dashboard() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default Dashboard;
