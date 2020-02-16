<template>
  <div>
    <Search url=http://google.com />
    <div class="all-planets">
      <Card v-for="planet in planets" :title="planet.name" :info="`Diameter: ${planet.diameter} | Climate: ${planet.climate}`" :key="planet.name" />
    </div>
    <div v-if="loading" class="loader"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import Search from '@/components/Search.vue';
import axios from 'axios';
import { ALL_PLANETS_QUERY } from '@/utils/constants';

export default {
  name: 'Planets',
  data: function() {
    return {
      planets: [],
      loading: 0
    }
  },
  components: {
    Card,
    Search
  },
  apollo: {
    planets: {
      query: ALL_PLANETS_QUERY
    }
  }
}
</script>
