import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// import "./login.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput
} from "mdbreact";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from "reactstrap";

const FormPage = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Input without validation</Label>
        <Input />
        <FormFeedback>You will not be able to see this</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Valid input</Label>
        <Input valid />
        <FormFeedback valid>Sweet! that name is available</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Invalid input</Label>
        <Input invalid />
        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Input without validation</Label>
        <Input />
        <FormFeedback tooltip>You will not be able to see this</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Valid input</Label>
        <Input valid />
        <FormFeedback valid tooltip>
          Sweet! that name is available
        </FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Invalid input</Label>
        <Input invalid />
        <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
    </Form>
  );
};

export default FormPage;
