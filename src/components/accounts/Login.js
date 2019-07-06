import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput
} from "mdbreact";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormPage = () => {
  return (
    <div>
      <Row className="container-fluid banner-login">
        <MDBCol md="6">
          <Signup />
        </MDBCol>
        <MDBCol md="6">
          <WriteUp />
        </MDBCol>
      </Row>
    </div>
  );
};

function WriteUp() {
  return (
    <div
      className="briefDescription"
      style={{ paddingTop: "100px", paddingLeft: "70px" }}
    >
      <h1 className="title">Login To Your Dashboard </h1>
      <h4>
        ApartmentPro.ng is the leading real estate property center platform in
        Nigeria. with a web-based platform for property retails and sales. We
        provide user with the best property search experience both online and
        offline by connecting them with legitimate and verified real estate
        agents.
      </h4>
    </div>
  );
}

function Signup() {
  return (
    <MDBContainer>
      <MDBRow style={{ marginBottom: "200px", marginTop: "100px" }}>
        <MDBCol md="6">
          <MDBCard
            className="card-image"
            style={{
              width: "28rem"
            }}
          >
            <div
              className="text-white rgba-stylish-strong py-5 px-5 z-depth-4"
              style={{ backgroundColor: "rgba(242, 245, 249, 0.7)" }}
            >
              <div className="text-center">
                <h3 className="green-text mb-5 mt-4 font-weight-bold">
                  <strong>LOG IN</strong>
                </h3>
              </div>
              <MDBInput label="Your email" group type="text" validate />
              <MDBInput
                placeholder
                label="Your password"
                group
                type="password"
                validate
              />

              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="success"
                    rounded
                    type="button"
                    className="btn-block z-depth-1"
                  >
                    Login
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md="12">
                <p
                  style={{ color: "rgb(51, 49, 49)" }}
                  className="font-small  d-flex justify-content-end"
                >
                  Don't have an account?
                  <Link
                    to={`/Signup/`}
                    className="green-text ml-1 font-weight-bold"
                  >
                    Sign up
                  </Link>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FormPage;
