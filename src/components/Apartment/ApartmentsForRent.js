import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import BriefDetails from "./BriefDetails";
import { useGetForSale as useGetForRent } from "../queries/useQueryApartment";
import { useIndicateInterest } from "../mutations/useIndicateInterest";

function ApartmentsForRent() {
  const { data } = useGetForRent("Rent");
  const generalApartments = [];
  const interestedApartments = [];
  // const [apartment, setstate] = useState();
  // const { data2 } = useIndicateInterest(apartment, "5d4155cfcd68f4086d8df4a9");

  // console.log(data2);

  // const [generalApartments, setGeneralApartments] = useState([]);
  // const [interestedApartments, setInterestedApartments] = useState([]);
  // const [state, setstate] = useState({
  //   apartmentID: "",
  //   occupantID: "5d4155cfcd68f4086d8df4a9"
  // });
  // if()
  /**TODO Save the occupant id in interested list and repopulate the list
   * Note: Always populate the list of apartments excluding the once the occupant has already shown interest on.
   *
   */
  // const { interestData } = useIndicateInterest(
  //   state.apartmentID,
  //   state.occupantID
  // );

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
    // const occupantID = "5d4155cfcd68f4086d8df4a9";
    // const { id: apartmentID } = apartment;
    // const { id: ownerID } = apartment.owner;
    console.log(apartment);

    // const { data  } = useIndicateInterest(apartmentID, occupantID, ownerID);

    // useEffect(() => {
    // setstate(apartment);
    // }, [data]);
    // setstate(oldState => {
    //   oldState.apartmentID = apartment.id;
    // });
  }

  // useEffect(() => {
  // const { interestData } = useIndicateInterest("5d4155cfcd68f4086d8df4a9");

  // }, [input]);

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
          <h3 style={{ margin: "30px" }}>Vacant Apartments For Rent</h3>
          <Grid style={{ margin: "20px" }}>{generalApartments}</Grid>
        </>
      ) : null}
    </>
  );
}

export default ApartmentsForRent;
