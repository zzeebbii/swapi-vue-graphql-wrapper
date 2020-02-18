module.exports = {
  Query: {
    people: (_, __, { dataSources }) => dataSources.swapiAPI.getPeople(),
    person: (_, { id }, { dataSources }) =>
      dataSources.swapiAPI.getPersonById(id),
    personByName: (_, { name }, { dataSources }) =>
      dataSources.swapiAPI.getPersonByName(name),
    planets: (_, __, { dataSources }) => dataSources.swapiAPI.getPlanets(),
    planet: (_, { id }, { dataSources }) =>
      dataSources.swapiAPI.getPlanetById(id),
    planetByName: (_, { name }, { dataSources }) =>
      dataSources.swapiAPI.getPlanetByName(name)
  }
};
