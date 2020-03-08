// modules
import express from 'express'
import http from 'http'
import morgan from 'morgan'

// helpers
import { startApollo } from '@/server/startApollo'
import { initSequelize } from '@/models'

export const startServer = async () => {
  const { sequelize } = await initSequelize()
  const apollo = await startApollo(sequelize)
  const app = express()
  const server = http.createServer(app)

  app.use(morgan('dev'))

  apollo.applyMiddleware({ app, path: `/graphql` })
  apollo.installSubscriptionHandlers(server)

  return { server }
}
