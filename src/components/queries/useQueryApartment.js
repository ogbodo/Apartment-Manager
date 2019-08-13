import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export function useGetForSale(purpose) {
  const query = gql`
    {
      getVacantApartments(purpose: "${purpose}") {
        id
        state
        area
        street
        title
        purpose
        useOfApartment
        typeOfApartment
        noOfBedrooms
        noOfBathrooms
        noOfToilets
        description
        youTubeLinkToApartment
        apartmentFeatures
        apartmentPrice
        currency
        paymentDuration
        owner {
          fullName
          id
          phone
          email
        }
        occupant {
          fullName
          id
        }
        interestedOccupants{
          id
        }
      }
    }
  `;

  return useQuery(query);
}
