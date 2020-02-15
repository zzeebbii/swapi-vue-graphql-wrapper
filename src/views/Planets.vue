<template>
  <div>
    <Search url=http://google.com />
    <div class="all-planets">
      <Card v-for="planet in planets" :title="planet.name" :info="`Diameter: ${planet.diameter} | Climate: ${planet.climate}`" :key="planet.name" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import Search from '@/components/Search.vue';
import axios from 'axios';
import { BASE_URL } from '@/utils/constants';

export default {
  name: 'Planets',
  data: function() {
    return {
      planets: []
    }
  },
  components: {
    Card,
    Search
  },
  mounted: async function() {
    let nextUrl = `${BASE_URL}/planets`;
    while (nextUrl) {
      const response = await axios.get(nextUrl);
      this.planets = [...this.planets, ...response.data.results];
      nextUrl = response.data.next;
    }
  }
}
</script>
