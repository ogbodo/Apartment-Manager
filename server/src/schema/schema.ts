import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLInputObjectType,
  GraphQLList,
} from 'graphql';
import _ from 'lodash';
import UserModel from '../models/User.model';

const ApartmentObjectType = new GraphQLInputObjectType({
  name:"Apartment",fields:()=>({
    id: { type: GraphQLID },
  })
})

const UserObjectType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    fullName: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    password: { type: GraphQLString },
    userType: { type: GraphQLString },
    apartments:{
type: new GraphQLList(ApartmentObjectType)
    }
  }),
});

const RootQuery = new GraphQLObjectType({
  //To login user
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserObjectType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_parent, _args) {
        //Code to get data from our db or other source
      },
    },
  },
});

const Mutation = new GraphQLInputObjectType({
  name: 'Mutation',
  fields: {
    addUser:{
      type:UserObjectType,
      arge:{
        fullName:{}
      }
    }
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
