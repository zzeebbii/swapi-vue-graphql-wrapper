<template>
  <div>
    <Search @onSearch="onSearch" />
    <div class="cards">
      <Card
        v-for="person in people"
        :title="person.name"
        :info="`Height: ${person.height} | Mass: ${person.mass}`"
        :key="person.name"
      />
    </div>
    <div v-if="loading" class="loader"></div>
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
      query: ALL_PEOPLE_QUERY
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
      skipQuery: true
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
