<template>
  <div>
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="loading" class="loader"></div>
    <div class="info" v-if="planet">
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{{ planet.name }}</td>
          </tr>
          <tr>
            <td>Climate</td>
            <td>{{ planet.climate }}</td>
          </tr>
          <tr>
            <td>Diameter</td>
            <td>{{ planet.diameter }}</td>
          </tr>
          <tr>
            <td>Gravity</td>
            <td>{{ planet.gravity }}</td>
          </tr>
          <tr>
            <td>Orbital Period</td>
            <td>{{ planet.orbital_period }}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{{ planet.population }}</td>
          </tr>
          <tr>
            <td>People</td>
            <td v-if="planet.people">
              <ul>
                <li v-for="person in planet.people" :key="person.name">{{ person.name }}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Rotation Period</td>
            <td>{{ planet.rotation_period }}</td>
          </tr>
          <tr>
            <td>Surface Water</td>
            <td>{{ planet.surface_water }}</td>
          </tr>
          <tr>
            <td>Terrain</td>
            <td>{{ planet.terrain }}</td>
          </tr>
          <tr>
            <td>URL</td>
            <td>{{ planet.url }}</td>
          </tr>
          <tr>
            <td>Created</td>
            <td>{{ planet.created }}</td>
          </tr>
          <tr>
            <td>Edited</td>
            <td>{{ planet.edited }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { SINGLE_PLANET_QUERY } from "@/utils/constants";

export default {
  name: "Planet",
  data() {
    return {
      planet: null,
      loading: 0,
      id: this.$route.params.id,
      error: null
    };
  },
  apollo: {
    planet: {
      query: SINGLE_PLANET_QUERY,
      variables() {
        return {
          id: this.id
        }
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  }
};
</script>
