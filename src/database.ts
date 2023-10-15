import 'dotenv/config'
import { Knex, knex as setupKnex } from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found.')
}

export const databaseConfig: Knex.Config = {
  client: process.env.DATABASE_CLIENT,
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(databaseConfig)
