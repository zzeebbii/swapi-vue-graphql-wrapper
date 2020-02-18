<template>
  <div>
    <div v-if="loading" class="loader"></div>
    <Search @onSearch="onSearch" />
    <div class="error" v-if="error">{{ error }}</div>
    <div class="cards">
      <Card
        v-for="planet in planets"
        :url="'planet/' + planet.id"
        :title="planet.name"
        :info="`Diameter: ${planet.diameter} | Climate: ${planet.climate}`"
        :key="planet.name"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";
import axios from "axios";
import { ALL_PLANETS_QUERY, SEARCH_PLANET_QUERY } from "@/utils/constants";

export default {
  name: "Planets",
  data: function() {
    return {
      planets: [],
      loading: 0,
      planetToSearch: "",
      skipQuery: true,
      error: null
    };
  },
  components: {
    Card,
    Search
  },
  apollo: {
    planets: {
      query: ALL_PLANETS_QUERY,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    },
    searchPlanet: {
      query: SEARCH_PLANET_QUERY,
      variables() {
        return {
          name: this.planetToSearch
        };
      },
      skip() {
        return this.skipQuery;
      },
      manual: true,
      result({ data, loading }) {
        if (!loading) {
          this.planets = data.planetByName;
        }
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  },
  methods: {
    onSearch(value) {
      this.planetToSearch = value;
      this.skipQuery = false;
      this.$apollo.queries.searchPlanet.refetch();
    }
  }
};
</script>
