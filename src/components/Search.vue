<template>
  <div class="search">
    <form id="serach-form" v-on:submit.prevent="onSearch(searchTerm)">
      <input class="serach-input" id="search-input" type="text" v-model="searchTerm" />
      <button type="submit" class="search-button" name="search-button">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: function() {
    return {
      searchTerm: ""
    };
  },
  props: {
    endpoint: String
  },
  methods: {
    onSearch(event) {
      this.$emit("onSearch", this.searchTerm);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search {
  .serach-input {
    -webkit-font-smoothing: antialiased;
    border: 1px solid #42b983;
    border-radius: 2px;
    font-size: 2rem;
    padding: 6px;
    width: 600px;
  }

  .search-button {
    -webkit-font-smoothing: antialiased;
    margin: 5px;
    padding: 5px;
    background-color: #42b983;
    color: #fff;
    font-size: 2rem;
    border-radius: 5px;
  }
}
</style>
