import joi from '@hapi/joi';

export const addProperty = {
  state: joi
    .string()
    .trim()
    .required(),
  locality: joi
    .string()
    .trim()
    .required(),
  area: joi
    .string()
    .trim()
    .required(),
  street: joi
    .string()
    .trim()
    .required(),
  title: joi
    .string()
    .trim()
    .required(),
  purpose: joi
    .string()
    .trim()
    .required(),
  useOfApartment: joi
    .string()
    .trim()
    .required(),
  typeOfApartment: joi
    .string()
    .trim()
    .required(),
  noOfBedrooms: joi.number().required(),
  noOfBathrooms: joi.number().required(),
  noOfToilets: joi.number().required(),
  description: joi
    .string()
    .trim()
    .required(),
  youTubeLinkToApartment: joi.string().trim(),
  apartmentFeatures: joi.array().required(),
  apartmentPrice: joi.number().required(),
  currency: joi
    .string()
    .trim()
    .required(),
  paymentDuration: joi
    .string()
    .trim()
    .required(),
  ownerID: joi
    .string()
    .trim()
    .required(),
};

export const updateProperty = {
  state: joi.string().trim(),
  locality: joi.string().trim(),
  area: joi.string().trim(),
  street: joi.string().trim(),
  title: joi.string().trim(),
  purpose: joi.string().trim(),
  useOfApartment: joi.string().trim(),
  typeOfApartment: joi.string().trim(),
  noOfBedrooms: joi.number(),
  noOfBathrooms: joi.number(),
  noOfToilets: joi.number(),
  description: joi.string().trim(),
  youTubeLinkToApartment: joi.string().trim(),
  apartmentFeatures: joi.array(),
  apartmentPrice: joi.number(),
  currency: joi.string().trim(),
  paymentDuration: joi.string().trim(),
  ownerID: joi.string().trim(),
  occupantID: joi.string().trim(),
  previousOccupantIDs: joi.array(),
  interestedOccupantIDs: joi.array(),
};

export const letApartment = {
  apartmentID: joi.string().trim(),
  occupantID: joi.string().trim(),
};

export const prospectiveOccupant = {
  apartmentID: joi.string().trim(),
  occupantID: joi.string().trim(),
  ownerID: joi.string().trim(),
};

export const Id = {
  id: joi
    .string()
    .trim()
    .required(),
};

export const ownerID = {
  ownerID: joi
    .string()
    .trim()
    .required(),
};

export const searchApartments = {
  state: joi
    .string()
    .required()
    .trim(),
  purpose: joi
    .string()
    .trim()
    .required(),
  typeOfApartment: joi
    .string()
    .trim()
    .required(),
  apartmentPrice: joi.number().required(),
  noOfBedrooms: joi.number().required(),
};
