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
