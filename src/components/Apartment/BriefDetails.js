import React from "react";
import { Card, Button } from "semantic-ui-react";
// import ContactDetails from './ContactDetails';

const ShortApartmentDetail = ({
  title,
  description,
  typeOfApartment,
  useOfApartment,
  street,
  state,
  area,
  apartmentPrice,
  currency,
  paymentDuration,
  viewDetails,
  onIndicateInterest,
  caption
}) => {
  return (
    <Card
      style={{
        width: "420px",
        margin: "10px"
      }}
    >
      <Card.Content
        style={{
          textAlign: "center"
        }}
      >
        <Card.Header
          onClick={viewDetails}
          style={{
            fontFamily: "Arsenal"
          }}
        >{`${title} `}</Card.Header>
        <Card.Meta>{`${street} ${area} ${state}`}</Card.Meta>
        <Card.Description onClick={viewDetails}>
          <h4
            style={{
              fontFamily: "Lilita One"
            }}
          >
            {description}
          </h4>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div
          style={{
            textAlign: "center",
            color: "green",
            fontWeight: "bolder",
            fontFamily: "cursive"
          }}
        >{`N${apartmentPrice}  ${paymentDuration}`}</div>
        <div className="ui four buttons">
          <Button event={viewDetails} basic color="yellow">
            View Details
          </Button>
          <Button onClick={onIndicateInterest} basic color="green">
            {caption}
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ShortApartmentDetail;
