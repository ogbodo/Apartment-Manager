import React, { useState } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useLocalStorage from "./UseLocalStorage";
import swal from "sweetalert";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput
} from "mdbreact";

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
  const [userState, setUserState] = useState({});
  const [, setUser] = useLocalStorage("");

  function onNameChange(e) {
    const name = e.target.value;
    setUserState(oldUserState => {
      const newUserState = { ...oldUserState, fullName: name.trim() };
      return newUserState;
    });
  }

  function onEmailChange(e) {
    const email = e.target.value;
    setUserState(oldUserState => {
      const newUserState = { ...oldUserState, email: email };
      return newUserState;
    });
  }
  function onPasswordChange(e) {
    const password = e.target.value;
    setUserState(oldUserState => {
      const newUserState = { ...oldUserState, password: password };
      return newUserState;
    });
  }
  function onConfirmPasswordChange(e) {
    const password = e.target.value;
    setUserState(oldUserState => {
      const newUserState = { ...oldUserState, confirmPassword: password };
      return newUserState;
    });
  }

  function onPhoneChange(e) {
    const phone = e.target.value;
    setUserState(oldUserState => {
      const newUserState = { ...oldUserState, phone: phone };
      return newUserState;
    });
  }
  function onUserTypeChange(e) {
    const userType = e.target.value;
    setUserState(oldUserState => {
      const newUserState = { ...oldUserState, userType: userType };
      return newUserState;
    });
  }

  function onSubmit() {
    if (doValidation()) setUser(userState);
  }

  function doValidation() {
    const namePattern = /\b[a-zA-Z]+\b$/;
    const emailPattern = /^[a-z0-9._+-]{3,}@[a-z0-9_.-]{3,12}\.[a-z0-9]{3,12}(\.[a-z0-9]{2,12})?$/;
    const passwordPattern = /^.{6,12}$/;
    const phone = /^(\+123|0)[0-9]{10}$/;
    const userType = /^(USER|AGENT|OWNER)$/;

    if (!namePattern.test(userState.fullName)) {
      swal("Invalid", `Please Enter a Valid Name.`, "error");
      return false;
    }

    if (!emailPattern.test(userState.email)) {
      swal("Invalid", `Please Enter a Valid Email Address.`, "error");
      return false;
    }
    if (!passwordPattern.test(userState.password)) {
      swal(
        "Invalid Password Length",
        `Please Enter a Strong Password between Six to Twelve Characters.`,
        "error"
      );
      return false;
    }

    if (userState.confirmPassword !== userState.password) {
      swal(
        "Password Mismatched",
        `Please Enter the same Password you Entered before for Confirmation.`,
        "error"
      );
      return false;
    }

    if (!phone.test(userState.phone)) {
      swal("Invalid", `Please Enter a Valid Phone Number.`, "error");
      return false;
    }
    if (!userType.test(userState.userType)) {
      swal("Wrong Identity", `Please tell us who you are`, "warning");
      return false;
    }
    return true;
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
                value={userState ? userState.FullName : ""}
              />
              <MDBInput
                label="Email Address"
                group
                type="text"
                onChange={onEmailChange}
                value={userState ? userState.email : ""}
              />
              <MDBInput
                placeholder
                label="Password"
                group
                type="password"
                onChange={onPasswordChange}
                value={userState ? userState.password : ""}
              />
              <MDBInput
                placeholder
                label="Confirm Password"
                group
                type="password"
                onChange={onConfirmPasswordChange}
                value={userState ? userState.confirmPassword : ""}
              />
              <MDBInput
                label="Phone Number"
                group
                type="text"
                onChange={onPhoneChange}
                value={userState ? userState.phone : ""}
              />
              <div style={{ color: "rgb(51, 49, 49)", padding: "15px" }}>
                <strong>You are?</strong>
                <br />
                <input
                  type="radio"
                  name="userType"
                  value="USER"
                  style={{ margin: "5px" }}
                  onChange={onUserTypeChange}
                />
                {"User "}

                <input
                  type="radio"
                  name="userType"
                  value="AGENT"
                  style={{ margin: "5px" }}
                  onChange={onUserTypeChange}
                />
                {"Agent "}
                <input
                  type="radio"
                  name="userType"
                  value="OWNER"
                  style={{ margin: "5px" }}
                  onChange={onUserTypeChange}
                />
                {"Owner "}
              </div>

              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="success"
                    type="submit"
                    className="btn-block z-depth-1"
                    onClick={onSubmit}
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
