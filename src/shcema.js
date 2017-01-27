import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import fetch from 'node-fetch'

const BASE_URL = 'http://localhost:8000'

function getPersonByUrl(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`)
  .then(res => res.json)
  .then(json => json.person)
}

const PersonType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    firstName: {
      type: GraphQLString,
      resolve: (person) => person.first_name
    },
    email: {
      type: GraphQLString,
      resolve: (person) => person.last_name
    },
    username: { type: GraphQLString },
    id: { type: GraphQLString },
    lastName: { type: GraphQLString },
    friends: {
      type = new GraphQLList(PersonType),
      resolve: (person) =>
      person.friends.map(getPersonByUrl)
    }
  })
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    person: {
      type: 'PersonType',
      args: {
        id: { type: GraphQLString }
      },
      resolve: (root, args) => getPersonByUrl(`/people/${args.id}`)
    }
  })
})


export default new GraphQLSchema({
  query: QueryType
})
