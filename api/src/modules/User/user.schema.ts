import { gql } from 'apollo-server-express'

export const UserSchema = gql`
  extend type Query {
    user: [User]!
  }

  type User {
    id: Int
    email: String
  }
`
