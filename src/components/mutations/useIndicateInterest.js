import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export function useIndicateInterest(apartment, occupantID) {
  let query;
  if (apartment) {
    query = gql`
    mutation {
      indicateInterestOnApartment(apartmentID: ${apartment.id}, occupantID: ${occupantID}, ownerID: ${apartment.owner.id}) {
        id
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
      }
    }
  `;
  }
  return useMutation(query);
}
