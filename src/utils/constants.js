import gql from "graphql-tag";

export const BASE_URL = "https://swapi.co/api";

export const ALL_PEOPLE_QUERY = gql`
  query AllPeopleQuery {
    people {
      id
      name
      height
      mass
    }
  }
`;

export const ALL_PLANETS_QUERY = gql`
  query AllPlanetsQuery {
    planets {
      id
      name
      diameter
      climate
    }
  }
`;

export const SINGLE_PERSON_QUERY = gql`
  query SinglePersonQuery($id: String!) {
    person(id: $id) {
      id
      name
      height
      mass
    }
  }
`;

export const SINGLE_PLANET_QUERY = gql`
  query SinglePlanetQuery($id: String!) {
    planet(id: $id) {
      id
      name
      diameter
      climate
    }
  }
`;

export const SEARCH_PERSON_QUERY = gql`
  query SearchPersonQuery($name: String!) {
    personByName(name: $name) {
      id
      name
      height
      mass
    }
  }
`;

export const SEARCH_PLANET_QUERY = gql`
  query SearchPlanetQuery($name: String!) {
    planetByName(name: $name) {
      id
      name
      diameter
      climate
    }
  }
`;
