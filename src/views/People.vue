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
    <div v-show="isLoading" class="loader"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import Search from "@/components/Search.vue";
import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export default {
  name: "People",
  data: function() {
    return {
      people: [],
      isLoading: true
    };
  },
  components: {
    Card,
    Search
  },
  mounted: async function() {
    let nextUrl = `${BASE_URL}/people`;
    while (nextUrl) {
      const response = await axios.get(nextUrl);
      this.people = [...this.people, ...response.data.results];
      nextUrl = response.data.next;
    }
    this.isLoading = false;
  }
};
</script>
