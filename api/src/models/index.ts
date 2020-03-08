// modules
import { Sequelize } from 'sequelize-typescript'

// constants
import { config as defaultConfig } from '@/../config/config'

// models
import { User } from '@/models/User'

const models: any = [
  User,
]

const config = defaultConfig[process.env.ENV as string]

export const initSequelize = async () => {
  const sequelize = new Sequelize(
    config.database as string,
    config.username as string,
    config.password as string,
    {
      ...config as {},
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
