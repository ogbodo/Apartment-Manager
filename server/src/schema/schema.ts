import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import User from '../models/User.model';
import Apartment from '../models/Apartment.model';
import CheckedOutApartment from '../models/CheckedOutApartment';
import { doValidation } from '../joi_schema/utils';
import * as apartmentSchema from '../joi_schema/apartment-schema';
import * as userSchema from '../joi_schema/user-schema';

const ApartmentObjectType = new GraphQLObjectType({
  name: 'Apartment',
  fields: () => ({
    id: { type: GraphQLID },
    state: { type: GraphQLString },
    locality: { type: GraphQLString },
    area: { type: GraphQLString },
    street: { type: GraphQLString },
    title: { type: GraphQLString },
    purpose: { type: GraphQLString },
    useOfApartment: { type: GraphQLString },
    typeOfApartment: { type: GraphQLString },
    noOfBedrooms: { type: GraphQLInt },
    noOfBathrooms: { type: GraphQLInt },
    noOfToilets: { type: GraphQLInt },
    description: { type: GraphQLString },
    youTubeLinkToApartment: { type: GraphQLString },
    apartmentFeatures: { type: new GraphQLList(GraphQLString) },
    apartmentPrice: { type: GraphQLInt },
    currency: { type: GraphQLString },
    paymentDuration: { type: GraphQLString },
    owner: {
      type: UserObjectType,
      resolve(parent: any, _args: any) {
        //Here we have access to the owner's Id of this apartment via the parent variable
        return User.findById(parent.ownerID);
      },
    },
    occupant: {
      type: UserObjectType,
      resolve(parent: any, _args: any) {
        //Here we have access to the Id of the user currently occupying this apartment via the parent variable
        return User.findById(parent.occupantID);
      },
    },
    previousOccupants: {
      type: new GraphQLList(UserObjectType),
      async resolve(parent: any, _args: any) {
        //Here we have access to all users Ids that has occupied this apartment before now via the parent variable
        const peoplePromise = parent.previousOccupantIDs.map((id: string) =>
          User.findById(id),
        );
        return await Promise.all(peoplePromise);
      },
    },
    interestedOccupants: {
      type: new GraphQLList(UserObjectType),
      async resolve(parent: any, _args: any) {
        //Here we have access to all users Ids that are interested of this apartment via the parent variable
        const peoplePromise = parent.interestedOccupantIDs.map((id: string) =>
          User.findById(id),
        );
        return await Promise.all(peoplePromise);
      },
    },
  }),
});

const UserObjectType: any = new GraphQLObjectType({
  name: 'User',
  fields: (): any => ({
    id: { type: GraphQLID },
    fullName: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    password: { type: GraphQLString },
    userType: { type: GraphQLString },
    apartmentsOwned: {
      type: new GraphQLList(ApartmentObjectType),
      resolve(_parent: any, _args: any) {},
    },
    currentHome: {
      type: ApartmentObjectType,
      resolve(_parent: any, _args: any) {},
    },
  }),
});

const RootQuery: any = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    //To get single user
    user: {
      type: UserObjectType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...userSchema.Id,
          },
        );
        if (error) {
          return error;
        }
        return User.findById(value.id);
      },
    },
    //To get multiple users
    users: {
      type: new GraphQLList(UserObjectType),
      args: {
        userType: { type: GraphQLString },
      },
      resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          { ...userSchema.userType },
        );
        if (error) {
          return error;
        }
        return User.find({ userType: value.userType });
      },
    },
    //To get a single apartment
    getApartmentById: {
      type: ApartmentObjectType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...apartmentSchema.Id,
          },
        );
        if (error) {
          return error;
        }
        return Apartment.findById(value.id);
      },
    },

    //To get multiple apartments
    searchApartments: {
      type: new GraphQLList(ApartmentObjectType),
      args: {
        state: { type: GraphQLString },
        purpose: { type: GraphQLString }, //e.g for rent, sale or short rent
        typeOfApartment: { type: GraphQLString }, //e.g Flat, house, upstairs etc
        apartmentPrice: { type: GraphQLInt },
        noOfBedrooms: { type: GraphQLInt },
      },
      resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...apartmentSchema.searchApartments,
          },
        );
        if (error) {
          return error;
        }
        /* NOTE: This returns all apartments which matches the specified requirements
        which are less than or equal to the price */
        const {
          state,
          purpose,
          typeOfApartment,
          apartmentPrice,
          noOfBedrooms,
        } = value;

        return Apartment.find({
          $and: [
            { state },
            { purpose },
            { typeOfApartment },
            { apartmentPrice: { $lte: apartmentPrice } },
            { noOfBedrooms },
          ],
        });
      },
    },

    //Gets apartments belonging to a particular user
    getApartmentsByOwnerId: {
      type: new GraphQLList(ApartmentObjectType),
      args: {
        id: { type: GraphQLID },
      },
      resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...apartmentSchema.Id,
          },
        );
        if (error) {
          return error;
        }

        return Apartment.find({ ownerID: value.id });
      },
    },
    //Gets all vacant apartments
    getVacantApartments: {
      type: new GraphQLList(ApartmentObjectType),
      args: {
        purpose: { type: GraphQLString },
      },
      description:
        'This returns all vacant apartments either for sale, rent or short rent ',
      async resolve(_parent: any, args: any) {
        return Apartment.find({
          occupantID: null,
          purpose: args.purpose,
        });
      },
    },

    //Get all users interested on a particular apartment
    getCheckedOutApartments: {
      type: new GraphQLList(ApartmentObjectType),
      description:
        'Returns collection of all users that are interested on a particular apartment',
      args: {
        ownerID: { type: GraphQLID },
      },
      async resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...apartmentSchema.ownerID,
          },
        );
        if (error) {
          return error;
        }
        const { ownerID } = value;
        const checkedOutApartments = await CheckedOutApartment.find({
          ownerID,
        });
        const uniqueApartmentId = new Set();
        //This ensures there is no duplicate of apartment id in what we shall query
        checkedOutApartments.forEach(item =>
          uniqueApartmentId.add(item.apartmentID),
        );

        const checkedOutApartmentsPromise = Array.from(uniqueApartmentId).map(
          item => Apartment.findById(item),
        );
        return await Promise.all(checkedOutApartmentsPromise);
      },
    },
  },
});

const Mutation: any = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    //Creates a user
    addUser: {
      type: UserObjectType,
      args: {
        fullName: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        password: { type: GraphQLString },
        userType: { type: GraphQLString },
      },
      resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...userSchema.addUser,
          },
        );
        if (error) {
          return error;
        }
        const user = new User({
          ...value,
        });
        return user.save();
      },
    },
    //Update user profile
    updateUser: {
      type: UserObjectType,
      args: {
        id: { type: GraphQLID },
        fullName: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        password: { type: GraphQLString },
        userType: { type: GraphQLString },
        whatsAppNumber: { type: GraphQLString },
        mobile: { type: GraphQLString },
        address: { type: GraphQLString },
        isBusinessRegistered: { type: GraphQLBoolean },
        businessName: { type: GraphQLString },
        website: { type: GraphQLString },
        businessPhoneNo: { type: GraphQLString },
        businessAddress: { type: GraphQLString },
        businessRegNo: { type: GraphQLString },
        aboutUsText: { type: GraphQLString },
        businessLogo: { type: GraphQLString },
        currentApartmentId: { type: GraphQLID },
      },
      resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...userSchema.updateProfile,
          },
        );
        if (error) {
          return error;
        }
        return User.findByIdAndUpdate(args.id, value, { new: true });
      },
    },
    //Let an apartment
    letApartment: {
      type: ApartmentObjectType,
      args: {
        apartmentID: { type: GraphQLID },
        occupantID: { type: GraphQLID },
      },
      async resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...apartmentSchema.letApartment,
          },
        );
        if (error) {
          return error;
        }
        const { apartmentID } = value;

        const apartment = await Apartment.findOneAndUpdate(
          { _id: apartmentID, occupantID: null },
          { ...value, interestedOccupantIDs: [] },
          {
            new: true,
          },
        );

        if (!apartment) {
          throw new Error(
            'This apartment is not vacant, hence its not for let',
          );
        }

        await CheckedOutApartment.deleteMany({ apartmentID });

        return apartment;
      },
    },

    //Save user's interest over a particular apartment
    indicateInterestOnApartment: {
      type: ApartmentObjectType,
      description:
        "Add user's interest on a particular apartment. Expects apartmentID, ownerID and occupantID",
      args: {
        apartmentID: { type: GraphQLID },
        ownerID: { type: GraphQLID },
        occupantID: { type: GraphQLID },
      },
      async resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...apartmentSchema.prospectiveOccupant,
          },
        );
        if (error) {
          return error;
        }
        const { apartmentID: id, occupantID } = value;
        const apartment = await Apartment.findById(id);
        if (!apartment) {
          throw Error('Error');
        }
        if (apartment.occupantID !== null) {
          throw Error('This apartment is not vacant');
        }
        const checkedOutApartment = new CheckedOutApartment({ ...value });
        checkedOutApartment.save();

        return Apartment.findOneAndUpdate(
          { _id: id },
          { $push: { interestedOccupantIDs: occupantID } },
          { new: true },
        );
      },
    },

    //Removes user's interest over a particular apartment
    removeUserInterestOnApartment: {
      type: ApartmentObjectType,
      description:
        "Add user's interest on a particular apartment. Expects apartmentID, ownerID and occupantID",
      args: {
        id: { type: GraphQLID },
        apartmentID: { type: GraphQLID },
        occupantID: { type: GraphQLID },
      },
      async resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...apartmentSchema.prospectiveOccupant,
          },
        );
        if (error) {
          return error;
        }
        const { apartmentID, occupantID } = value;

        CheckedOutApartment.findByIdAndDelete(args.id);

        return Apartment.findOneAndUpdate(
          { _id: apartmentID },
          //TODO ATTEND TO THIS WHEN THERE IS NETWORK
          { $remove: { interestedOccupantIDs: occupantID } },
          { new: true },
        );
      },
    },

    //Vacate an apartment
    vacateApartment: {
      type: ApartmentObjectType,
      description: 'Vacate an apartment',
      args: {
        apartmentID: { type: GraphQLID },
        occupantID: { type: GraphQLID },
      },
      async resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...apartmentSchema.letApartment,
          },
        );
        if (error) {
          return error;
        }
        const { apartmentID, occupantID } = value;

        /*Finds and update an apartment by adding the occupant id in a list containing ids of users that has occupied that apartment
         and sets the occupantID field to null*/
        const apartment = await Apartment.findOneAndUpdate(
          { _id: apartmentID, occupantID },
          { $push: { previousOccupantIDs: occupantID }, occupantID: null },
          { new: true },
        );

        if (!apartment) {
          throw new Error('This apartment is already vacant');
        }

        return apartment;
      },
    },
    //Creates an apartment
    addApartment: {
      type: ApartmentObjectType,
      args: {
        state: { type: GraphQLString },
        locality: { type: GraphQLString },
        area: { type: GraphQLString },
        street: { type: GraphQLString },
        title: { type: GraphQLString }, //e.g Newly built 4 bedrooms duplex in serene Neighborhood
        purpose: { type: GraphQLString }, //e.g Rent, Sale or short rent
        useOfApartment: { type: GraphQLString }, //Residential, commercial
        typeOfApartment: { type: GraphQLString }, //e.g Flat, Bungalow, up-stair, House etc
        noOfBedrooms: { type: GraphQLInt },
        noOfBathrooms: { type: GraphQLInt },
        noOfToilets: { type: GraphQLInt },
        description: { type: GraphQLString },
        youTubeLinkToApartment: { type: GraphQLString },
        apartmentFeatures: { type: new GraphQLList(GraphQLString) }, //e.g swimming pool, etc
        apartmentPrice: { type: GraphQLInt },
        currency: { type: GraphQLString }, //Naira or Dollars
        paymentDuration: { type: GraphQLString }, //e.g Per Year, Per Month, or Per Day
        ownerID: { type: GraphQLID },
      },
      resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...apartmentSchema.addProperty,
          },
        );
        if (error) {
          return error;
        }

        const apartment = new Apartment({
          ...value,
        });
        return apartment.save();
      },
    },
    //Updates an apartment
    updateApartment: {
      type: ApartmentObjectType,
      args: {
        id: { type: GraphQLID },
        state: { type: GraphQLString },
        locality: { type: GraphQLString },
        area: { type: GraphQLString },
        street: { type: GraphQLString },
        title: { type: GraphQLString }, //e.g Newly built 4 bedrooms duplex in serene Neighborhood
        purpose: { type: GraphQLString }, //e.g Rent, Sale or short rent
        useOfApartment: { type: GraphQLString }, //Residential, commercial
        typeOfApartment: { type: GraphQLString }, //e.g Flat, Bungalow, up-stair, House etc
        noOfBedrooms: { type: GraphQLInt },
        noOfBathrooms: { type: GraphQLInt },
        noOfToilets: { type: GraphQLInt },
        description: { type: GraphQLString },
        youTubeLinkToApartment: { type: GraphQLString },
        apartmentFeatures: { type: new GraphQLList(GraphQLString) }, //e.g swimming pool, etc
        apartmentPrice: { type: GraphQLInt },
        currency: { type: GraphQLString }, //Naira or Dollars
        paymentDuration: { type: GraphQLString }, //e.g Per Year, Per Month, or Per Day
      },
      resolve(_parent: null, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...apartmentSchema.updateProperty,
          },
        );
        if (error) {
          return error;
        }
        return Apartment.findOneAndUpdate(
          { _id: args.id, occupantID: null },
          value,
          { new: true },
        );
      },
    },
    //Delete an apartment
    deleteApartment: {
      type: ApartmentObjectType,
      args: { id: { type: GraphQLID } },
      resolve(_parent: any, args: any) {
        const { error, value } = doValidation(
          { ...args },
          {
            ...apartmentSchema.Id,
          },
        );
        if (error) {
          return error;
        }
        return Apartment.findByIdAndDelete(value.id);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
