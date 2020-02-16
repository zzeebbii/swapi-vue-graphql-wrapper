<template>
  <div>
    <Search url=http://google.com />
    <div class="all-people">
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
import { BASE_URL, ALL_PEOPLE_QUERY } from "@/utils/constants";
import axios from "axios";

export default {
  name: "People",
  data: function() {
    return {
      people: [],
      loading: 0
    };
  },
  components: {
    Card,
    Search
  },
  apollo: {
    people: {
      query: ALL_PEOPLE_QUERY
    }
  }
};
</script>
