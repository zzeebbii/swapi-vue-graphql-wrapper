<template>
  <div>
    <div v-if="loading" class="loader"></div>

    <Search @onSearch="onSearch" />

    <div class="error" v-if="error">{{ error }}</div>

    <div class="cards">
      <Card
        v-for="person in people"
        :url="'people/' + person.id"
        :title="person.name"
        :info="`Height: ${person.height} | Mass: ${person.mass}`"
        :key="person.id"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";

import {
  ALL_PEOPLE_QUERY,
  SEARCH_PERSON_QUERY
} from "@/utils/constants";

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
      manual: true,
      variables() {
        return {
          name: this.personToSearch
        };
      },
      skip() {
        return this.skipQuery;
      },
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
      error: null,
      loading: 0,
      people: [],
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
