<template>
  <div>
    <div v-if="loading" class="loader"></div>
    <Search @onSearch="onSearch" />
    <div class="error" v-if="error">{{ error }}</div>
    <div class="cards">
      <Card
        v-for="person in people"
        :url="'person/' + person.id"
        :title="person.name"
        :info="`Height: ${person.height} | Mass: ${person.mass}`"
        :key="person.name"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";
import {
  BASE_URL,
  ALL_PEOPLE_QUERY,
  SEARCH_PERSON_QUERY
} from "@/utils/constants";
import axios from "axios";

export default {
  name: "People",
  apollo: {
    people: {
      query: ALL_PEOPLE_QUERY,
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    },
    person: {
      query: SEARCH_PERSON_QUERY,
      variables() {
        return {
          name: this.personToSearch
        };
      },
      skip() {
        return this.skipQuery;
      },
      manual: true,
      result({ data, loading }) {
        if (!loading) {
          this.people = data.personByName;
        }
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  },
  components: {
    Card,
    Search
  },
  data: function() {
    return {
      people: [],
      loading: 0,
      personToSearch: "",
      skipQuery: true,
      error: null
    };
  },
  methods: {
    onSearch(name) {
      this.personToSearch = name;
      this.skipQuery = false;
      this.$apollo.queries.person.refetch();
    }
  }
};
</script>
