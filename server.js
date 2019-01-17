
const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello: String,
    world: String,
    rollDice: Int
  }
`)

const root = {
  hello: () => {
    return 'Hello, World'
  },
  world: () => {
    return 'World, hello'
  },
  rollDice: () => Math.floor(Math.random() * 6) + 1
}

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000, () => console.log('> Listening on port 4000'))
