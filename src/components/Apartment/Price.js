import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

function Address() {
  return (
    <div>
      <h2 style={{ fontWeight: "bold", margin: "10px 0px 30px 30px" }}>
        Apartment's Price
      </h2>
      <Form style={{ margin: "30px" }}>
        <FormGroup>
          <Label for="currency_select">Currency</Label>
          <Input
            type="select"
            name="currency"
            id="currency_select"
            className="form-control"
            required="required"
          >
            <option value="naira">Naira</option>
            <option value="dollar">Dollar</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="axis">Price</Label>
          <Input
            type="number"
            name="axis"
            id="axis"
            className="form-control"
            required="required"
            placeholder="e.g 500000(comma is added for you)"
          />
        </FormGroup>
        <FormGroup>
          <Label for="currency_select">Duration Required</Label>
          <Input
            type="select"
            name="duration"
            id="duration_select"
            className="form-control"
            required="required"
          >
            <option value="">--select--</option>
            <option value="year">Per Year</option>
            <option value="month">Per Month</option>
            <option value="day">Per Day</option>
          </Input>
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
