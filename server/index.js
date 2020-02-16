const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const SwapiAPI = require("./datasources/SwapiAPI");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    swapiAPI: new SwapiAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
