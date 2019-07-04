import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import slide1 from "../assets/images/slides/1.jpeg";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput
} from "mdbreact";
import { Row } from "react-bootstrap";
import { Card, CardImg } from "reactstrap";

function DashBoard() {
  return (
    <div>
      <Row className="container-fluid ">
        <MDBCol md="3">
          <Master />
        </MDBCol>
        <MDBCol md="9">
          <h1>Details goes here</h1>
        </MDBCol>
      </Row>
    </div>
  );
}
function Master() {
  const adminMenu = [
    "Dashboard",
    "Post a property",
    "My listings",
    "Clients Requests",
    "My Profile",
    "Logout"
  ];
  const titles = adminMenu.map((menu, index) => (
    <ListGroupItem className="menu-items" key={index}>
      {menu}
    </ListGroupItem>
  ));

  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          height="200px"
          src={process.env.PUBLIC_URL + "/assets/images/avater.png"}
          alt="Card image cap"
        />
        <ListGroup
          style={{
            marginBottom: "300px",
            cursor: "pointer"
          }}
          className="menu-items"
        >
          {titles}
        </ListGroup>
      </Card>
    </div>
  );
}

function ProfileCard() {}
export default DashBoard;
