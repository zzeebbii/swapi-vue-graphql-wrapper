<template>
  <div>
    <div v-if="loading" class="loader"></div>

    <Search @onSearch="onSearch" />

    <div class="error" v-if="error">{{ error }}</div>

    <div class="cards">
      <Card
        v-for="planet in planets"
        :url="'planets/' + planet.id"
        :title="planet.name"
        :info="`Diameter: ${planet.diameter} | Climate: ${planet.climate}`"
        :key="planet.name"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";
import { ALL_PLANETS_QUERY, SEARCH_PLANET_QUERY } from "@/utils/constants";

export default {
  name: "Planets",
  apollo: {
    planets: {
      query: ALL_PLANETS_QUERY,
      error(error) {
        this.error = JSON.stringify(error.message);
      },
      loadingKey: "loading"
    },
    searchPlanet: {
      query: SEARCH_PLANET_QUERY,
      manual: true,
      variables() {
        return {
          name: this.planetToSearch
        };
      },
      skip() {
        return this.skipQuery;
      },
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
  data: function() {
    return {
      error: null,
      loading: 0,
      planets: [],
      planetToSearch: "",
      skipQuery: true
    };
  },
  components: {
    Card,
    Search
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
