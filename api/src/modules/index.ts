// modules
import { gql } from 'apollo-server-express'

// resolvers
import { UserResolvers } from '@/modules/User/user.resolvers'


// schemas
import { UserSchema } from '@/modules/User/user.schema'


const TSResolvers: any = [
  UserResolvers,
]
const TSTypeDefs: any = [
  UserSchema,
]

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`

const typeDefs = [linkSchema, ...TSTypeDefs]
const resolvers = [...TSResolvers]

export { typeDefs, resolvers }
