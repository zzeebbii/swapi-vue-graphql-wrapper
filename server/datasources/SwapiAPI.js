const { RESTDataSource } = require("apollo-datasource-rest");
const { addObjectID, getObjectId } = require("../utils/helpers");

class SwapiAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.co/api";
  }

  async getAllObjectsFromSwapi(url) {
    let response = [];

    while (url) {
      const { results, next } = await this.get(url);
      response = [...response, ...results];
      url = next;
    }

    return Array.isArray(response) ? response : [];
  }

  async getPeople() {
    const people = await this.getAllObjectsFromSwapi("people/?page=1");
    return Promise.all(people.map(person => this.objectReducerWithId(person)));
  }

  async getPersonById(id) {
    const person = await this.get(`/people/${id}`);
    return this.objectReducerWithId(person);
  }

  async getPersonByName(name) {
    const people = await this.getAllObjectsFromSwapi(`/people/?search=${name}`);
    return Promise.all(people.map(person => this.objectReducerWithId(person)));
  }

  async getPlanets() {
    const planets = await this.getAllObjectsFromSwapi("planets/?page1");
    return planets.map(planet => this.objectReducerWithId(planet));
  }

  async getPlanetById(id) {
    const planet = await this.get(`/planets/${id}`);
    return this.objectReducerWithId(planet);
  }

  async getPlanetByName(name) {
    const planets = await this.getAllObjectsFromSwapi(`/planets/?search=${name}`);
    return planets.map(planet => this.objectReducerWithId(planet));
  }

  async getPersonByUrl(url) {
    const planet = await this.get(url);
    return this.objectReducerWithId(planet);
  }

  async getPlanetByUrl(url) {
    const planet = await this.get(url);
    return this.objectReducerWithId(planet);
  }

  objectReducerWithId(object) {
    return {
      ...addObjectID(object)
    };
  }
}

module.exports = SwapiAPI;
