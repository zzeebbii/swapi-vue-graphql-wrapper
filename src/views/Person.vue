<template>
  <div>
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="loading" class="loader"></div>
    <div class="info" v-if="person">
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{{ person.name }}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{{ person.height }}</td>
          </tr>
          <tr>
            <td>Mass</td>
            <td>{{ person.mass }}</td>
          </tr>
          <tr>
            <td>Hair Color</td>
            <td>{{ person.hair_color }}</td>
          </tr>
          <tr>
            <td>Skin Color</td>
            <td>{{ person.skin_color }}</td>
          </tr>
          <tr>
            <td>Eye Color</td>
            <td>{{ person.eye_color }}</td>
          </tr>
          <tr>
            <td>Birth Year</td>
            <td>{{ person.birth_year }}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{{ person.gender }}</td>
          </tr>
          <tr>
            <td>Planet</td>
            <td v-if="person.planet">{{ person.planet.name }}</td>
          </tr>
          <tr>
            <td>URL</td>
            <td>{{ person.url }}</td>
          </tr>
          <tr>
            <td>Created at</td>
            <td>{{ person.created }}</td>
          </tr>
          <tr>
            <td>Edited</td>
            <td>{{ person.edited }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { SINGLE_PERSON_QUERY } from "@/utils/constants";

export default {
  name: "Person",
  data() {
    return {
      person: null,
      loading: 0,
      id: this.$route.params.id,
      error: null
    };
  },
  apollo: {
    person: {
      query: SINGLE_PERSON_QUERY,
      variables() {
        return {
          id: this.id
        };
      },
      error(error) {
        this.error = JSON.stringify(error.message);
      }
    }
  }
};
</script>
