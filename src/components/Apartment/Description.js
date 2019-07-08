import React, { useState } from "react";
import { Form, FormGroup, Label, Input, ButtonGroup, Button } from "reactstrap";
import { TextArea } from "semantic-ui-react";
import Features from "./Features";

function Address() {
  const [buttonState, setButtonState] = useState({
    active: false,
    whichBnt: ""
  });

  function toggle(event) {
    const clickedButton = event.target.name;
    setButtonState(oldState => {
      const active = !oldState.active;

      return { active, whichBnt: clickedButton };
    });
  }

  function getClassName(clickedButton) {
    if (buttonState.active && buttonState.whichBnt === clickedButton) {
      return " active";
    }
    return "";
  }

  function ComposeButtons({ properties, prefix }) {
    function generateButtons() {
      if (!properties.length) {
        for (let index = 0; index < 10; index++) {
          const currentValue =
            index + 1 === 10 ? `${index + 1}+` : `${index + 1}`;
          properties.push(currentValue);
        }
      }
      return properties.map(item => {
        const itemName = item.replace(" ", "").toLocaleLowerCase();
        return (
          <Button
            key={`${prefix}-${itemName}`}
            name={`${prefix}-${itemName}`}
            onClick={toggle}
            className={getClassName(`${prefix}-${itemName}`)}
          >
            {item}
          </Button>
        );
      });
    }
    return <>{generateButtons()}</>;
  }

  return (
    <div>
      <h2 style={{ fontWeight: "bold", margin: "10px 0px 30px 30px" }}>
        Apartment's Description
      </h2>
      <Form style={{ margin: "30px" }}>
        <FormGroup>
          <Label for="state_select">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            className="form-control"
            required="required"
            placeholder="e.g Newly Built 4 Bedroom Duplex in Aja"
          />
        </FormGroup>
        <FormGroup>
          <Label for="axis" style={{ marginRight: "30px" }}>
            Purpose
          </Label>
          <br />

          <ButtonGroup aria-label="Basic example" className="group-button">
            <ComposeButtons
              properties={["For Rent", "For Sale", "Short Let"]}
            />
          </ButtonGroup>
        </FormGroup>

        <FormGroup>
          <Label for="axis" style={{ marginRight: "30px" }}>
            Use of Apartment
          </Label>
          <br />
          <ButtonGroup aria-label="Basic example" className="group-button">
            <ComposeButtons properties={["Residential", "Commercial"]} />
          </ButtonGroup>
        </FormGroup>

        <FormGroup>
          <Label for="state_select">Type of Apartment</Label>
          <Input
            type="select"
            name="state"
            id="state_select"
            className="form-control"
            required="required"
          >
            <option value="">--select--</option>
            <option value="type_commercial">Commercial Apartment</option>
            <option value="type_flat">Flat</option>
            <option value="type_house">House</option>
            <option value="type_Upstairs">Upstairs</option>
            <option value="type_working_space">Co-working Space</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="axis" style={{ marginRight: "30px" }}>
            Bedrooms
          </Label>
          <br />
          <ButtonGroup aria-label="Basic example" className="group-button">
            <ComposeButtons properties={[]} prefix="bedroom" />
          </ButtonGroup>
        </FormGroup>
        <FormGroup>
          <Label for="axis" style={{ marginRight: "30px" }}>
            Bathrooms
          </Label>
          <br />
          <ButtonGroup aria-label="Basic example" className="group-button">
            <ComposeButtons properties={[]} prefix="bathroom" />
          </ButtonGroup>
        </FormGroup>
        <FormGroup>
          <Label for="axis" style={{ marginRight: "30px" }}>
            Toilets
          </Label>
          <br />
          <ButtonGroup aria-label="Basic example" className="group-button">
            <ComposeButtons properties={[]} prefix="toilet" />
          </ButtonGroup>
        </FormGroup>

        <FormGroup>
          <Label for="axis" style={{ marginRight: "30px" }}>
            Description
          </Label>
          <br />
          <TextArea
            style={{ width: "100%", height: "150px" }}
            placeholder="Please Describe this Apartment in more details"
          />
        </FormGroup>
        <FormGroup>
          <Label for="axis" style={{ marginRight: "30px" }}>
            Youtube Video link(optional)
          </Label>
          <br />
          <Input placeholder="Enter Youtube link" />
        </FormGroup>
        <FormGroup>
          <Features />
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
