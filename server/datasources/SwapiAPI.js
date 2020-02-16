const axios = require("axios");
const { addObjectID } = require("../utils/helpers");

class SwapiAPI {
  constructor() {
    this.baseURL = "https://swapi.co/api";
  }

  async getAllFromURL(url) {
    let results = [];
    while (url) {
      const { data } = await axios.get(url);
      results = [...results, ...data.results];
      url = data.next;
    }

    return Array.isArray(results)
      ? results.map(person => this.personReducer(person))
      : [];
  }

  getPeople() {
    return this.getAllFromURL(`${this.baseURL}/people/?page=1`);
  }

  getPlanets() {
    return this.getAllFromURL(`${this.baseURL}/planets/?page=1`);
  }

  async getPerson(url) {
    const { data } = await axios.get(url);
    return data;
  }

  async getPlanet(url) {
    const { data } = await axios.get(url);
    return data;
  }

  personReducer(person) {
    return {
      ...addObjectID(person),
      planet: this.getPlanet(person.homeworld)
    };
  }
}

module.exports = SwapiAPI;
