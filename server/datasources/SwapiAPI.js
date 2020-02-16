const axios = require("axios");
const { addObjectID, getObjectId } = require("../utils/helpers");

class SwapiAPI {
  constructor() {
    this.baseURL = "https://swapi.co/api";
  }

  async getObjectsFromSwapi(swapiObject) {
    let url = `${this.baseURL}/${swapiObject}/?page=1`;
    let results = [];

    while (url) {
      const { data } = await axios.get(url);
      results = [...results, ...data.results];
      url = data.next;
    }

    return Array.isArray(results) ? results : [];
  }

  async fetch(url) {
    const { data } = await axios.get(url);
    return data;
  }

  async getPeople() {
    const people = await this.getObjectsFromSwapi("people");
    return people.map(person => this.personReducer(person));
  }

  async getPersonById(id) {
    const person = await this.fetch(`${this.baseURL}/people/${id}`);
    return this.personReducer(person);
  }

  async getPlanets() {
    const planets = await this.getObjectsFromSwapi("planets");
    return planets.map(planet => this.planetReducer(planet));
  }

  async getPlanetById(id) {
    const planet = await this.fetch(`${this.baseURL}/planets/${id}`);
    return this.planetReducer(planet);
  }

  personReducer(person) {
    return {
      ...addObjectID(person),
      planet: this.getPlanetById(getObjectId(person.homeworld))
    };
  }

  planetReducer(planet) {
    return {
      ...addObjectID(planet),
      people: Promise.all(
        planet.residents.map(p => this.getPersonById(getObjectId(p)))
      )
    };
  }
}

module.exports = SwapiAPI;
