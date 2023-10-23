import { Knex, knex as setupKnex } from 'knex'
import { env } from './env'

const getConnectionConfigByDatabaseClient = (client: 'sqlite' | 'pg') => {
  switch (client) {
    case 'sqlite':
      return {
        filename: env.DATABASE_URL,
      }
    case 'pg':
    default:
      return env.DATABASE_URL
  }
}

export const databaseConfig: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection: getConnectionConfigByDatabaseClient(env.DATABASE_CLIENT),
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(databaseConfig)
