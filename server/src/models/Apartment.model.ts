import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface IApartmentSchema extends mongoose.Document {
  state: string;
  locality: string;
  area: string;
  street: string;
  title: string;
  purpose: string;
  useOfApartment: string;
  typeOfApartment: string;
  noOfBedrooms: number;
  noOfBathrooms: number;
  noOfToilets: number;
  description: string;
  youTubeLinkToApartment?: string;
  apartmentFeatures: string[];
  apartmentPrice: number;
  currency: string;
  paymentDuration: string;
  ownerID: string;
  occupantID?: string;
  previousOccupantIDs?: string[];
  interestedOccupantIDs?: string[];
}

const ApartmentSchema = new Schema(
  {
    state: { type: String, required: true },
    locality: { type: String, required: true },
    area: { type: String, required: true },
    street: { type: String, required: true },
    title: { type: String, required: true },
    purpose: { type: String, required: true },
    useOfApartment: { type: String, required: true },
    typeOfApartment: { type: String, required: true },
    noOfBedrooms: { type: Number, required: true },
    noOfBathrooms: { type: Number, required: true },
    noOfToilets: { type: Number, required: true },
    description: { type: String, required: true },
    youTubeLinkToApartment: { type: String },
    apartmentFeatures: { type: Array, required: true },
    apartmentPrice: { type: Number, required: true },
    currency: { type: String, required: true },
    paymentDuration: { type: String, required: true },
    ownerID: { type: String, required: true },
    occupantID: { type: String, default: null },
    previousOccupantIDs: { type: Array },
    interestedOccupantIDs: { type: Array },
  },
  { timestamps: true },
);

export default mongoose.model<IApartmentSchema>('Apartments', ApartmentSchema);
