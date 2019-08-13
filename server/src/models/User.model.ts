import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface IUserSchema extends mongoose.Document {
  fullName: string;
  email: string;
  password: string;
  userType: string;
  phone: string;
  mobile: string;
  whatsAppNumber?: string;
  address?: string;
  isBusinessRegistered?: Boolean;
  businessName?: string;
  website?: string;
  businessPhoneNo?: string;
  businessAddress?: string;
  businessRegNo?: string;
  aboutUsText?: string;
  businessLogo?: string;
}

const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userType: { type: String, required: true },
    phone: { type: String, required: true },
    mobile: { type: String },
    whatsAppNumber: { type: String },
    address: { type: String },
    isBusinessRegistered: { type: Boolean },
    businessName: { type: String },
    website: { type: String },
    businessPhoneNo: { type: String },
    businessAddress: { type: String },
    businessRegNo: { type: String },
    aboutUsText: { type: String },
    businessLogo: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model<IUserSchema>('Users', UserSchema);
