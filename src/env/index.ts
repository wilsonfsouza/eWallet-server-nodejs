import 'dotenv/config'
import { z } from 'zod'

const KNEX_CLIENTS = [
  'pg',
  'pg-native',
  'sqlite3',
  'better-sqlite3',
  'mysql',
  'mysql2',
  'oracledb',
  'tedious',
] as const

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_CLIENT: z.enum(KNEX_CLIENTS).default('sqlite3'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(envSchema)

if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format)

  throw new Error('Invalid environment variables')
}

export const env = _env.data
