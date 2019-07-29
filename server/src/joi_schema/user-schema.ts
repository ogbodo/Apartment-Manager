import joi from '@hapi/joi';

const namePattern = /\b[a-zA-Z]+\b$/;

export const register = {
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

export const login = {
  email: joi
    .string()
    .email()
    .lowercase()
    .trim()
    .required(),
  password: joi
    .string()
    .trim()
    .required(),
};

export const updateProfile = {
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
  password: joi.string().trim(),
  whatsAppNumber: joi
    .string()
    .trim()
    .required(),
  mobile: joi.string().trim(),

  address: joi
    .string()
    .lowercase()
    .trim()
    .email()
    .required(),
  isBusinessRegistered: joi
    .string()
    .lowercase()
    .trim()
    .email()
    .required(),
  businessName: joi
    .string()
    .lowercase()
    .trim()
    .email()
    .required(),
  website: joi
    .string()
    .lowercase()
    .trim()
    .email()
    .required(),
  businessPhoneNo: joi
    .string()
    .lowercase()
    .trim()
    .email()
    .required(),
  businessAddress: joi
    .string()
    .lowercase()
    .trim()
    .email()
    .required(),
  businessRegNo: joi
    .string()
    .lowercase()
    .trim()
    .email()
    .required(),
  aboutUsText: joi
    .string()
    .lowercase()
    .trim()
    .email()
    .required(),
  businessLogo: joi
    .string()
    .lowercase()
    .trim()
    .email()
    .required(),
};
