// modules
import { Sequelize } from 'sequelize-typescript'

// models
import { User } from '@/models/User'

const models: any = [
  User,
]

const config = require('../../config/config')[process.env.ENV as string]

export const initSequelize = async () => {
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      ...config,
      models,
    },
  )

  try {
    await sequelize.authenticate()
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Unable to connect to the database:', err.stack)
  }

  return { sequelize }
}
