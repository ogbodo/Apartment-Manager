import mongoose from 'mongoose';

interface ICheckedOutApartment extends mongoose.Document {
  occupantID: string;
  apartmentID: string;
  ownerID: string;
}

const CheckedOutApartmentsSchema = new mongoose.Schema(
  {
    occupantID: { type: String },
    apartmentID: { type: String },
    ownerID: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model<ICheckedOutApartment>(
  'CheckedOutApartment',
  CheckedOutApartmentsSchema,
);
