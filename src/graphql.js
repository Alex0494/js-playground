import express from 'express'
import graphQlHTTP from 'express-graphql'
import schema from './schema'

const app = express()

app.use(graphQlHTTP({
  schema,
  graphiql: true
}))

app.listen(3000)
