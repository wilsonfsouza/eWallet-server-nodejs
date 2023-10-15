import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Test Transaction',
      amount: 1000,
    })
    .returning('*')

  return transaction
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running')
})
