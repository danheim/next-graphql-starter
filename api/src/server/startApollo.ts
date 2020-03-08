import { Sequelize } from 'sequelize-typescript'
import { ApolloServer } from 'apollo-server-express'

import { typeDefs, resolvers } from '@/modules'

export const startApollo = (
  sequelize: Sequelize,
) => new ApolloServer({
  playground: true,
  typeDefs,
  resolvers,
  context: () => ({
    sequelize,
  }),
})
