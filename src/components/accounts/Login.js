import React, { useState, useContext } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginUser } from "./UseLoginUser";
import swal from "sweetalert";
import { AuthenticatedUser } from "../AppContext";
import AgentDashboard from "../AgentDashboard";

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
          <Login />
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

function Login() {
  const [userState, setUserState] = useState({});
  const [logedInUser, loginUser] = useLoginUser("");
  const [user, setUser] = useContext(AuthenticatedUser);

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

  function onSubmit() {
    if (doValidation()) {
      loginUser(userState);

      if (logedInUser) {
        console.log("RESPONSE", logedInUser);
        setUser(logedInUser);

        swal("success", "Log Successfully!", "success");
      } else {
        swal(
          "Oops!",
          `Incorrect login credentials. Please try again!`,
          "error"
        );
      }
    }
  }

  function doValidation() {
    const emailPattern = /^[a-z0-9._+-]{3,}@[a-z0-9_.-]{3,12}\.[a-z0-9]{3,12}(\.[a-z0-9]{2,12})?$/;

    if (!emailPattern.test(userState.email)) {
      swal("Invalid", `Please Enter a Valid Email Address.`, "error");
      return false;
    }
    if (!userState.password) {
      swal("Error", `Please Enter a valid Password.`, "error");
      return false;
    }
    return true;
  }

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
              <MDBInput
                label="Your email"
                type="text"
                onChange={onEmailChange}
                value={userState ? userState.email : ""}
              />
              <MDBInput
                placeholder
                label="Your password"
                type="password"
                onChange={onPasswordChange}
                value={userState ? userState.password : ""}
              />

              <MDBRow className="d-flex align-items-center mb-4">
                <div className="text-center mb-3 col-md-12">
                  <MDBBtn
                    color="success"
                    type="button"
                    className="btn-block z-depth-1"
                    onClick={onSubmit}
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
