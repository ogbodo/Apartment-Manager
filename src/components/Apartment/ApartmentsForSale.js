import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import BriefDetails from "./BriefDetails";
import { useGetForSale as useGetForRent } from "../queries/useQueryApartment";
import { useIndicateInterest } from "../mutations/useIndicateInterest";

function ApartmentsForRent() {
  const { data } = useGetForRent("Sale");
  const generalApartments = [];
  const interestedApartments = [];

  function configure(apartment, caption) {
    return (
      <BriefDetails
        {...apartment}
        onIndicateInterest={useOnIndicateInterest.bind(this, apartment)}
        key={apartment.id}
        caption={caption}
      />
    );
  }

  function useOnIndicateInterest(apartment) {
    console.log(apartment);
  }

  const { getVacantApartments } = data;
  if (!getVacantApartments) return null;

  getVacantApartments.forEach(apartment => {
    if (apartment.interestedOccupants) {
      apartment.interestedOccupants.forEach(occupant => {
        occupant.id === "5d4155cfcd68f4086d8df4a9"
          ? interestedApartments.push(
              configure(apartment, "No longer Interested")
            )
          : generalApartments.push(configure(apartment, "I'M Interested!"));
      });
    } else {
      generalApartments.push(configure(apartment, "I'M Interested!"));
    }
  });

  return (
    <>
      {interestedApartments.length > 0 ? (
        <>
          <h3 style={{ margin: "30px" }}>Your Recent Interests</h3>
          <Grid style={{ margin: "20px" }}>{interestedApartments}</Grid>
        </>
      ) : null}
      {generalApartments.length > 0 ? (
        <>
          <h3 style={{ margin: "30px" }}>Vacant Apartments For Sale</h3>
          <Grid style={{ margin: "20px" }}>{generalApartments}</Grid>
        </>
      ) : null}
    </>
  );
}

export default ApartmentsForRent;
