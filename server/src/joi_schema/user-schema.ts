import joi from '@hapi/joi';

const namePattern = /\b[a-zA-Z]+\b$/;

export const addUser = {
  fullName: joi
    .string()
    .trim()
    .required()
    .regex(namePattern),
  phone: joi
    .string()
    .trim()
    .required(),
  email: joi
    .string()
    .lowercase()
    .trim()
    .email()
    .required(),
  password: joi
    .string()
    .trim()
    .required(),
  userType: joi
    .string()
    .trim()
    .required(),
  mobile: joi.string().trim(),
};

export const Id = {
  id: joi
    .string()
    .trim()
    .required(),
};

export const userType = {
  userType: joi
    .string()
    .trim()
    .required(),
};

export const updateProfile = {
  fullName: joi
    .string()
    .trim()
    .regex(namePattern),
  phone: joi.string().trim(),
  email: joi
    .string()
    .lowercase()
    .trim()
    .email(),
  password: joi.string().trim(),
  whatsAppNumber: joi.string().trim(),
  mobile: joi.string().trim(),
  address: joi
    .string()
    .lowercase()
    .trim(),
  isBusinessRegistered: joi.boolean(),
  businessName: joi
    .string()
    .lowercase()
    .trim(),
  website: joi
    .string()
    .lowercase()
    .trim(),
  businessPhoneNo: joi
    .string()
    .lowercase()
    .trim(),
  businessAddress: joi
    .string()
    .lowercase()
    .trim(),
  businessRegNo: joi
    .string()
    .lowercase()
    .trim(),
  aboutUsText: joi
    .string()
    .lowercase()
    .trim(),
  businessLogo: joi
    .string()
    .lowercase()
    .trim(),
};
