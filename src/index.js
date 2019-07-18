const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')


const resolvers = {
  Query,
  Mutation,
}

// Start with docker-compose up-d, node src/index.js
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma },
  })
  server.start(() => console.log(`Server is running on http://localhost:4000`))