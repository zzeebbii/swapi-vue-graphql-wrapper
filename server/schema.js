const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    people: [People]
    person(id: ID!): People
    personByName(name: String!): [People]
    planets: [Planet]
    planet(id: ID!): Planet
    planetByName(name: String!): [Planet]
  }

  type People @cacheControl(maxAge: 240) {
    id: ID!
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    planet: Planet @cacheControl(maxAge: 240)
    url: String
    created: String
    edited: String
  }

  type Planet @cacheControl(maxAge: 240) {
    id: ID!
    climate: String
    created: String
    diameter: String
    edited: String
    gravity: String
    name: String
    orbital_period: String
    population: String
    people: [People]
    rotation_period: String
    surface_water: String
    terrain: String
    url: String
  }
`;

module.exports = typeDefs;
