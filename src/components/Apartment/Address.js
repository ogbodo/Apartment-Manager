import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

function Address() {
  return (
    <div>
      <h2 style={{ fontWeight: "bold", margin: "10px 0px 30px 30px" }}>
        Apartment's Address
      </h2>
      <Form style={{ margin: "30px" }}>
        <FormGroup>
          <Label for="state_select">State</Label>
          <Input
            type="select"
            name="state"
            id="state_select"
            className="form-control"
            required="required"
          >
            <option value="">Choose State</option>
            <option value="1">Lagos</option>
            <option value="2">Abuja</option>
            <option value="3">Rivers</option>
            <option value="4">Ogun</option>
            <option value="5">Oyo</option>
            <option value="6">Anambra</option>
            <option value="7">Enugu</option>
            <option value="8">Akwa Ibom</option>
            <option value="9">Adamawa</option>
            <option value="10">Abia</option>
            <option value="11">Bauchi</option>
            <option value="12">Bayelsa</option>
            <option value="13">Benue</option>
            <option value="14">Borno</option>
            <option value="15">Cross River</option>
            <option value="16">Delta</option>
            <option value="17">Ebonyi</option>
            <option value="18">Edo</option>
            <option value="19">Ekiti</option>
            <option value="20">Gombe</option>
            <option value="21">Imo</option>
            <option value="22">Jigawa</option>
            <option value="23">Kaduna</option>
            <option value="24">Kano</option>
            <option value="25">Katsina</option>
            <option value="26">Kebbi</option>
            <option value="27">Kogi</option>
            <option value="28">Kwara</option>
            <option value="29">Nassarawa</option>
            <option value="30">Niger</option>
            <option value="31">Ondo</option>
            <option value="32">Osun</option>
            <option value="33">Plateau</option>
            <option value="34">Sokoto</option>
            <option value="35">Taraba</option>
            <option value="36">Yobe</option>
            <option value="37">Zamfara</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="axis">Locality</Label>
          <Input
            type="text"
            name="axis"
            id="axis"
            className="form-control"
            required="required"
          />
        </FormGroup>
        <FormGroup>
          <Label for="axis">Area</Label>
          <Input
            type="text"
            id="axis_area"
            name="axis_area"
            required="required"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Street</Label>
          <Input
            type="text"
            name="axis_area_street"
            id="axis_area_street"
            className="form-control"
            required="required"
          />
        </FormGroup>

        {/* <button
          style={{
            backgroundColor: "#9d060f",
            padding: "10px",
            color: "white",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        >
          Next
        </button> */}
      </Form>
    </div>
  );
}

export default Address;
