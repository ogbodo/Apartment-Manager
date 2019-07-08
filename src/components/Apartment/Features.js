import React from "react";
import { Form, FormGroup, Label } from "reactstrap";

function Features() {
  function CheckBoxes({ options }) {
    return (
      <div className="col-12">
        {options.map(item => (
          <label>
            <input type="checkbox" />
            <span style={{ margin: "5px" }}>{item}</span>
          </label>
        ))}
      </div>
    );
  }

  return (
    <Form>
      <FormGroup>
        <Label>Choose Apartment Features</Label>

        <CheckBoxes
          options={[
            "New",
            "Swimming Pool",
            "Renovated",
            "Old",
            "Cheap",
            "Furnished",
            "24 hours Electricity",
            "24 Hours Security",
            "All Room Ensui",
            "Big Compound",
            "Boys Quater",
            "CCTV Cameras",
            "Children Play Ground",
            "Church Nearby",
            "Drainage System",
            "Elevator",
            "Fast Internet",
            "Free WiFi",
            "Governor's Consent",
            "Gym",
            "Jacuzzi",
            "Mosques Nearby",
            "Ocean View",
            "Parking Space",
            "Office Supplies",
            "POP Ceiling ",
            "Printing Service",
            "Restaurants Nearby",
            "Security doors",
            "Street Lights",
            "Supermarket Nearby"
          ]}
        />
      </FormGroup>
    </Form>
  );
}

export default Features;
