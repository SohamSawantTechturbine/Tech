import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
export const typeDefs = gql`
type Query {
    test : User

}
  type Mutation {
    login(email: String!, password: String!): AuthPayload!
    update_profile(Name: String!,Email: String!,Birth_Date: String!,Contact: Int!,userid:ID!):AuthPayload!
  }

  type AuthPayload {
    message: String!
    user: User
  }

  type User {
    id: String
    Name: String
    Department: String
    Email: String
    Join_Date: String
    Birth_Date: String
    File: String
    Contact:Int
  }
`;
