import { gql } from '@apollo/client';

export const Update_mutation = gql`
  mutation Update_profile(
    $Name: String!
    $Email: String!
    $Birth_Date: String!
    $Contact: Int!
    $userid:ID!
  ) {
    update_profile(
      Name: $Name
      Email: $Email
      Birth_Date: $Birth_Date
      Contact: $Contact
      userid:$userid
    ) {
      message
      user {
        id
        Name
        Department
        Email
        Join_Date
        Birth_Date
        File
        Contact
      }
    }
  }
`;
