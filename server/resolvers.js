module.exports = {
  Query: {
    people: (_, __, { dataSources }) => dataSources.swapiAPI.getPeople(),
    person: (_, { id }, { dataSources }) => dataSources.swapiAPI.getPersonById(id),
    planets: (_, __, { dataSources }) => dataSources.swapiAPI.getPlanets(),
    planet: (_, { id }, { dataSources }) => dataSources.swapiAPI.getPlanetById(id)
  }
};
