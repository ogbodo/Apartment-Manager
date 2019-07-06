import React, { useState, useEffect } from "react";
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
import UseLocalStorage from "./UseLocalStorage";
import swal from "sweetalert";

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
      <h1 className="title">Register To Get Started</h1>
      <h4>
        ApartmentPro.ng is the leading real estate property center platform in
        Nigeria. with a web-based platform for apartment retails and sales. We
        provide user with the best property search experience both online and
        offline by connecting them with legitimate and verified real estate
        agents.
      </h4>

      <br />
      <h2 className="title">What I Gain by Joining PropertyPro.ng</h2>

      <ol>
        <li>
          <h4> Post as many properties as you can</h4>
        </li>
        <li>
          <h4> Gain access to phone numbers of unlimited number of clients</h4>
        </li>
        <li>
          <h4> Never forget an inspection with the inspection reminder</h4>
        </li>
        <li>
          <h4>Gain access to real estate agents all over Nigeria</h4>
        </li>
        <li>
          <h4>Market directly to clients through multiple online channels</h4>
        </li>
        <li>
          <h4>
            Market your properties on real estate gazettes and publications.
          </h4>
        </li>
      </ol>
    </div>
  );
}

function Signup() {
  // const [state, setstate] = UseLocalStorage("users");
  const [user, setUser] = useState({});

  function onNameChange(e) {
    const name = e.target.value;
    setUser(oldUserState => {
      const newUserState = { ...oldUserState, fullName: name };
      return newUserState;
    });
  }

  function doValidation() {
    const allUsers = JSON.parse(localStorage.getItem("users"));
    let users = [];

    if (allUsers) {
      const exists = allUsers.find(
        initialUser => initialUser.fullName === user.fullName
      );

      if (exists) {
        swal("User with this email already exist.");
        return;
      }
      users = [...allUsers];
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
  }

  return (
    <MDBContainer>
      <MDBRow style={{ marginBottom: "200px", marginTop: "50px" }}>
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
                  <strong>SIGN UP</strong>
                </h3>
              </div>
              <MDBInput
                label="Full Name"
                group
                type="text"
                onChange={onNameChange}
                value={user ? user.FullName : ""}
              />
              <MDBInput label="Email Address" group type="text" />
              <MDBInput placeholder label="Password" group type="password" />
              <MDBInput
                placeholder
                label="Confirm Password"
                group
                type="password"
              />
              <MDBInput label="Phone Number" group type="text" />
              <div style={{ color: "rgb(51, 49, 49)", padding: "15px" }}>
                <label>You are a</label>
                <br />
                <input
                  type="radio"
                  name="userType"
                  value="USER"
                  style={{ margin: "5px" }}
                />
                {"User "}

                <input type="radio" name="userType" style={{ margin: "5px" }} />
                {"Agent "}
                <input type="radio" name="userType" style={{ margin: "5px" }} />
                {"Owner "}
              </div>

              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="success"
                    type="submit"
                    className="btn-block z-depth-1"
                    onClick={doValidation}
                  >
                    Signup
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md="12">
                <p
                  style={{ color: "rgb(51, 49, 49)" }}
                  className="font-small  d-flex justify-content-end"
                >
                  Have an account?
                  <Link
                    to={`/login/`}
                    className="green-text ml-1 font-weight-bold"
                  >
                    Log In
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
