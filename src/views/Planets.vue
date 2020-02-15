<template>
  <div>
    <Search url=http://google.com />
    <div class="all-planets">
      <Card v-for="person in people" :title="person.name" :info="`Height: ${person.height} | Mass: ${person.mass}`" :key="person.name" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import Search from '@/components/Search.vue';

export default {
  name: 'Planets',
  data: function() {
    return {
      people: [{
        name: "Zohaib",
        height: 176,
        mass: 100,
        hair_color: "Black",
        skin_color: "white",
        eye_color: "Green",
        birth_year: 1997,
        gender: "Male",
        homeworld: "Lahore"
      }]
    }
  },
  components: {
    Card,
    Search
  }
}
</script>
